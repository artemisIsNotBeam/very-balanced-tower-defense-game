let canvas = document.getElementById("canvas");
let context =canvas.getContext('2d');

let color = ["C0C0C0","FF0000","008080", "000080", "800080"]

var turns = [[220,120],[220,420],[390,420],[390,120],[canvas.width+10,120]];
let enemies = []
let towers = []
let shots = []

let Health = 200;
let score = 0;
let level = 1;
let showRange = true
let Time = 0
let Timeout = 200
let Spawntime = 20
let Count = 0 

let roundMobs = 2 ** level

let enemy = (properties) =>{
	this.x = -20
	this.y = 120
	this.dx = 2+hits
	this.dy = 0
	this.hits = hits
	this.progress = 0
	this.nextTurn = 0


	this.updatePosition = function(){
        this.progress += Math.abs(this.dx)+Math.abs(this.dy);
        this.draw();
        if(this.checkTurn()){
            health -= this.hits+1;
            return true;
        }
        this.x += this.dx;
        this.y += this.dy;
    };
    this.draw = function(){
        ctx.beginPath();
        ctx.fillStyle = colors[this.hits];
        ctx.arc(this.x,this.y,10,0,2*Math.PI);
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";
        ctx.stroke();
        ctx.closePath();
    };
    
    this.checkTurn = function(){
        var distance = getDistance(this.x,this.y,turns[this.nextTurn][0],turns[this.nextTurn][1]);
        if(distance<=5){
            this.nextTurn++;
            if (this.nextTurn == turns.length){
                return true;
            }
            this.changeSpeed();
        }
    };
    this.changeSpeed = function(){
        var newSpeed = getXYSpeed(2+this.hits,this.x,this.y,turns[this.nextTurn][0],turns[this.nextTurn][1]);
        this.dx = newSpeed[0];
        this.dy = newSpeed[1];
    }
}