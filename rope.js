class Rope
{
    constructor(body1,point2,offsetX,offsetY)
    {

      this.offsetX=offsetX
      this.offsetY=offsetY
        var options=
        {
            bodyA:body1,
            pointB:point2,
            length:10,
            stiffness: 0.08
        }
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");

        this.point2=point2
           this.Rope=Matter.Constraint.create(options);
          World.add(world,this.Rope)
      }
      fly()
        {
         this.chain.body1=null
        }
      attach(body){
      this.chain.body1=body
      }
        
      display()
      {
        
      
       var pointA=this.Rope.bodyA.position;
       var pointB=this.Rope.bodyB.position;
        
       

      
      
        strokeWeight(2);
        var Anchor1X=pointA.x
        var Anchor2Y=pointA.y
          

      var Anchor2X=pointB.x+this.offsetX
      var Anchor2Y=pointB.y+this.offsetY


        {
         line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
         
        }
           
        }
        
        }

      
    