const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.hieght = window.innerHeight;

class Player {
    constructor(){
        this.position = {x:0,y:0};
        this.width = 100;
        this.hieght = 100;
    }

    draw() {
        ctx.fillRect(this.position.x,this.position.y,this.width,this.hieght)
    }
}

const player = new Player();
player.draw();

console.log("blah")


// 19 1035
