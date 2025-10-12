const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
    constructor(){
        this.position = {x:100,y:100};
        this.velocity = {x: 0, y: 1}
        this.width = 100;
        this.height = 100;
    }

    draw() {
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
    }

    update(){
        this.position.y += this.velocity.y;
        this.draw()
    }
}

const player = new Player();

console.log("blah")

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height)
    player.update();
}

animate()
