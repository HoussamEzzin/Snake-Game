let width;
let height;
let tileSize;
let canvas;
let ctx;

//Initialiszation of the game objects 
function init(){

    tileSize=20;

    //Dynamivally controlling the size of canvas.
    width = tileSize * Math.floor(window.innerWidth/tileSize);
    height = tileSize * Math.floor(window.innerHeight/tileSize);

    canvas=document.getElementById("game-area");
    canvas.width=width;
    canvas.height=height;
    ctx=canvas.getContext("2d");
    
}
class Food{
    constructor(pos,color){
        this.x=pos.x;
        this.y=pos.y;
        this.color=color;
    }
    draw(){
        ctx.beginPath();
        ctx.rect(this.x,this.y,tileSize,tileSize);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth=3;
        ctx.stroke();
        ctx.closePath();
    }
}