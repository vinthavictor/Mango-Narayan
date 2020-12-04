class Stone{
    constructor(x,y,r){
      var options={
        isStatic:false, //made some changes here
			  restitution:0,
			  friction:1,
			  density:1.2            
        }  
      this.r=r;
     this.body=Bodies.circle(x,y,this.r/2,options) //changed to this.r/2 
      this.image=loadImage("stone.png");
      World.add(world,this.body);
    }

    display(){
       var pos=this.body.position;     
       push();
      translate(pos.x,pos.y);
      imageMode(CENTER)
      ellipseMode(RADIUS)
      fill("black");      
     image(this.image,0,0,this.r*2,this.r*2);
      pop() ;

    }
    
}