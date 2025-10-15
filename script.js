const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = .5

class Player {
    constructor(){
        this.position = {x:100,y:100};
        this.velocity = {x: 0, y: 1}
        this.width = 20;
        this.height = 20;
    }

    draw() {
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
    update(){
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        this.draw()
        if(this.position.y +this.height + this.velocity.y <= canvas.height){
            this.velocity.y += gravity
        } else {
            this.velocity.y = 0;
        }
    }
}

class Platform {
    constructor() {
        this.position = {
            x:200,
            y:100
        }
        this.width = 200
        this.height = 20
    }

    draw() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}

const player = new Player();
const platform = new Platform();
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

console.log("blah")

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height)
    player.update();
    platform.draw();

    if(keys.right.pressed){
        player.velocity.x = 5
    } else if(keys.left.pressed){
        player.velocity.x = -5
    } else {
        player.velocity.x = 0
    }
    
    if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width){
        player.velocity.y = 0;
    }
}

animate()

window.addEventListener("keydown", ({keyCode}) => {
    switch (keyCode) {
        case 65:
            keys.left.pressed = true
            break

        case 83:
            
            break;

        case 68:
            keys.right.pressed = true
            break;
            
        case 87:
            player.velocity.y -= 20
            break;
    }
})

window.addEventListener("keyup", ({keyCode}) => {
    switch (keyCode) {
        case 65:
            keys.left.pressed = false
            break

        case 83:
            
            break;

        case 68:
            keys.right.pressed = false
            break;
            
        case 87:
            player.velocity.y -= 20
            break;
    }
})