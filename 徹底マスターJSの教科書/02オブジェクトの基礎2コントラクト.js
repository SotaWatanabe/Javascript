//Example1
function Particle(x,y,vx,vy){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.velocity = Math.sqrt(vx*vx*vy*vy);
}
var p = new particle(0,0,3,4);
console.log(p);
//→Particle{x:0,y:0,vx:3,vy:4,velocity:5}

//Example2
function Circle(center, radius){
    this.center = center;
    this.radius = radius;
    this.area = function(){
        return Math.PI*this.radius.radius;
    };
}
var p = {x:0, y:0};
var c = Circle(p,2.0);
console.log("面積 =" + c.area());
//面積=12.56・・・・
