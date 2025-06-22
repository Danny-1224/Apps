// Snake game created with plain JavaScript by Paul Segun(brownDev)


const domReplay = document.querySelector("#replay");
const domScore = document.querySelector("#score");
const domCanvas = document.createElement("canvas");
document.querySelector("#canvas").appendChild(domCanvas);
const ctx = domCanvas.getContext("2d");

const WIDTH = (domCanvas.width = 400);
const HEIGHT = (domCanvas.height = 400);

let snake;
let food;
let currentHue;
const CELLS = 20;
let cellSize;
let isGameOver = false;
const tails = [];
let score = 0;
let maxScore = window.localStorage.getItem("maxScore") || 0;
const particles = [];
const SPLASHING_PARTICLE_COUNT = 20;
let cellsCount;
let requestID;

const helpers = {
    Vec: class {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        add(v) {
            this.x += v.x;
            this.y += v.y;
            return this;
        }
        mult(v) {
            if (v instanceof helpers.Vec) {
                this.x *= v.x;
                this.y *= v.y;
            } else {
                this.x *= v;
                this.y *= v;
            }
            return this;
        }
    },
    isCollision(v1, v2) {
        return v1.x === v2.x && v1.y === v2.y;
    },
    garbageCollector() {
        for (let i = particles.length - 1; i >= 0; i--) {
            if (particles[i].size <= 0) {
                particles.splice(i, 1);
            }
        }
    },
    drawGrid() {
        ctx.lineWidth = 1.1;
        ctx.strokeStyle = "#232332";
        ctx.shadowBlur = 0;
        for (let i = 1; i < CELLS; i++) {
            const f = (WIDTH / CELLS) * i;
            ctx.beginPath();
            ctx.moveTo(f, 0);
            ctx.lineTo(f, HEIGHT);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0, f);
            ctx.lineTo(WIDTH, f);
            ctx.stroke();
            ctx.closePath();
        }
    },
    randHue() {
        return Math.floor(Math.random() * 360);
    },
    hsl2rgb(hue, saturation, lightness) {
        if (hue === undefined) {
            return [0, 0, 0];
        }
        const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
        const huePrime = hue / 60;
        const secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1));

        let red, green, blue;
        switch (Math.floor(huePrime)) {
            case 0:
                red = chroma;
                green = secondComponent;
                blue = 0;
                break;
            case 1:
                red = secondComponent;
                green = chroma;
                blue = 0;
                break;
            case 2:
                red = 0;
                green = chroma;
                blue = secondComponent;
                break;
            case 3:
                red = 0;
                green = secondComponent;
                blue = chroma;
                break;
            case 4:
                red = secondComponent;
                green = 0;
                blue = chroma;
                break;
            case 5:
                red = chroma;
                green = 0;
                blue = secondComponent;
                break;
        }

        const lightnessAdjustment = lightness - chroma / 2;
        red += lightnessAdjustment;
        green += lightnessAdjustment;
        blue += lightnessAdjustment;

        return [
            Math.round(red * 255),
            Math.round(green * 255),
            Math.round(blue * 255)
        ];
    },
    lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }
};

const KEY = {
    ArrowUp: false,
    ArrowRight: false,
    ArrowDown: false,
    ArrowLeft: false,
    resetState() {
        this.ArrowUp = false;
        this.ArrowRight = false;
        this.ArrowDown = false;
        this.ArrowLeft = false;
    },
    listen() {
        addEventListener(
            "keydown",
            (e) => {
                if (e.key === "ArrowUp" && this.ArrowDown) return;
                if (e.key === "ArrowDown" && this.ArrowUp) return;
                if (e.key === "ArrowLeft" && this.ArrowRight) return;
                if (e.key === "ArrowRight" && this.ArrowLeft) return;
                this[e.key] = true;
                Object.keys(this)
                    .filter((key) => key !== e.key && key !== "listen" && key !== "resetState")
                    .forEach((key) => {
                        this[key] = false;
                    });
            },
            false
        );
    }
};

class Snake {
    constructor() {
        this.pos = new helpers.Vec(WIDTH / 2, HEIGHT / 2);
        this.dir = new helpers.Vec(0, 0);
        this.size = WIDTH / CELLS;
        this.color = "green";
        this.history = [];
        this.total = 1;
        this.delay = 5;
    }
    draw() {
        const { x, y } = this.pos;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = "rgba(10, 161, 61, 0.27)";
        ctx.fillRect(x, y, this.size, this.size);
        ctx.shadowBlur = 0;
        if (this.total >= 2) {
            for (let i = 0; i < this.history.length - 1; i++) {
                const { x, y } = this.history[i];
                ctx.lineWidth = 1;
                ctx.fillStyle = "rgba(7, 121, 41, 0.66)";
                ctx.fillRect(x, y, this.size, this.size);
            }
        }
    }
    walls() {
        const { x, y } = this.pos;
        if (x + cellSize > WIDTH) {
            this.pos.x = 0;
        }
        if (y + cellSize > HEIGHT) {
            this.pos.y = 0;
        }
        if (y < 0) {
            this.pos.y = HEIGHT - cellSize;
        }
        if (x < 0) {
            this.pos.x = WIDTH - cellSize;
        }
    }
    controls() {
        const dir = this.size;
        if (KEY.ArrowUp) {
            this.dir = new helpers.Vec(0, -dir);
        }
        if (KEY.ArrowDown) {
            this.dir = new helpers.Vec(0, dir);
        }
        if (KEY.ArrowLeft) {
            this.dir = new helpers.Vec(-dir, 0);
        }
        if (KEY.ArrowRight) {
            this.dir = new helpers.Vec(dir, 0);
        }
    }
    selfCollision() {
        for (const p of this.history) {
            if (helpers.isCollision(this.pos, p)) {
                isGameOver = true;
            }
        }
    }
    update() {
        this.walls();
        this.draw();
        this.controls();
        if (!this.delay--) {
            if (helpers.isCollision(this.pos, food.pos)) {
                incrementScore();
                particleSplash();
                food.spawn();
                this.total++;
            }
            this.history[this.total - 1] = new helpers.Vec(this.pos.x, this.pos.y);
            for (let i = 0; i < this.total - 1; i++) {
                this.history[i] = this.history[i + 1];
            }
            this.pos.add(this.dir);
            this.delay = 5;
            if (this.total > 3) {
                this.selfCollision();
            }
        }
    }
}

class Food {
    constructor() {
        this.pos = new helpers.Vec(
            Math.floor(Math.random() * CELLS) * cellSize,
            Math.floor(Math.random() * CELLS) * cellSize
        );
        this.color = currentHue = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
        this.size = cellSize;
    }
    draw() {
        const { x, y } = this.pos;
        ctx.globalCompositeOperation = "lighter";
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.fillRect(x, y, this.size, this.size);
        ctx.globalCompositeOperation = "source-over";
        ctx.shadowBlur = 0;
    }
    spawn() {
        const randX = Math.floor(Math.random() * CELLS) * this.size;
        const randY = Math.floor(Math.random() * CELLS) * this.size;
        for (const path of snake.history) {
            if (helpers.isCollision(new helpers.Vec(randX, randY), path)) {
                return this.spawn();
            }
        }
        this.color = currentHue = `hsl(${helpers.randHue()}, 100%, 50%)`;
        this.pos = new helpers.Vec(randX, randY);
    }
}

class Particle {
    constructor(pos, color, size, vel) {
        this.pos = pos;
        this.color = color;
        this.size = Math.abs(size / 2);
        this.ttl = 0;
        this.gravity = -0.2;
        this.vel = vel;
    }
    draw() {
        const { x, y } = this.pos;
        const hsl = this.color
            .replace(/[^\d,]/g, '')
            .split(',')
            .map(Number);
        const [r, g, b] = helpers.hsl2rgb(hsl[0], hsl[1] / 100, hsl[2] / 100);
        ctx.shadowColor = `rgb(${r},${g},${b},1)`;
        ctx.shadowBlur = 0;
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = `rgb(${r},${g},${b},1)`;
        ctx.fillRect(x, y, this.size, this.size);
        ctx.globalCompositeOperation = "source-over";
    }
    update() {
        this.draw();
        this.size -= 0.3;
        this.ttl += 1;
        this.pos.add(this.vel);
        this.vel.y -= this.gravity;
    }
}

function incrementScore() {
    score++;
    domScore.innerText = score.toString().padStart(2, "0");
}

function particleSplash() {
    for (let i = 0; i < SPLASHING_PARTICLE_COUNT; i++) {
        const vel = new helpers.Vec(Math.random() * 6 - 3, Math.random() * 6 - 3);
        const position = new helpers.Vec(food.pos.x, food.pos.y);
        particles.push(new Particle(position, currentHue, food.size, vel));
    }
}

function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function initialize() {
    ctx.imageSmoothingEnabled = false;
    KEY.listen();
    cellsCount = CELLS * CELLS;
    cellSize = WIDTH / CELLS;
    snake = new Snake();
    food = new Food();
    domReplay.addEventListener("click", reset, false);
    loop();
}

function loop() {
    clear();
    if (!isGameOver) {
        requestID = setTimeout(loop, 1000 / 60);
        helpers.drawGrid();
        snake.update();
        food.draw();
        for (const p of particles) {
            p.update();
        }
        helpers.garbageCollector();
    } else {
        clear();
        gameOver();
    }
}

function gameOver() {
    maxScore = Math.max(score, maxScore);
    window.localStorage.setItem("maxScore", maxScore);
    ctx.fillStyle = "#4cffd7";
    ctx.textAlign = "center";
    ctx.font = "bold 30px Poppins, sans-serif";
    ctx.fillText("GAME OVER", WIDTH / 2, HEIGHT / 2);
    ctx.font = "15px Poppins, sans-serif";
    ctx.fillText(`SCORE   ${score}`, WIDTH / 2, HEIGHT / 2 + 60);
    ctx.fillText(`MAXSCORE   ${maxScore}`, WIDTH / 2, HEIGHT / 2 + 80);
}

function reset() {
    domScore.innerText = "00";
    score = 0;
    snake = new Snake();
    food.spawn();
    KEY.resetState();
    isGameOver = false;
    clearTimeout(requestID);
    loop();
}

let isPaused = false;

function togglePause() {
    if (isPaused) {
        isPaused = false;
        loop();
    } else {
        isPaused = true;
        clearTimeout(requestID);
    }
}

document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        togglePause();
    }
});

initialize();
