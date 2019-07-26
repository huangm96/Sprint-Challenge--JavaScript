// 1. Copy and paste your prototype in here and refactor into class syntax.
class NewCuboidMaker{
    constructor(c){
        this.length = c.length;
        this.width = c.width;
        this.height = c.height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}
  
  const newcuboid =new NewCuboidMaker({
    length: 4,
    width:5,
    height:5
  
  })
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newcuboid.volume()); // 100
console.log(newcuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
//Test your work by logging out your volume and surface area.

class CubeMaker extends NewCuboidMaker{
    constructor(s){
        super(s);
    }
    volume(){
        return Math.pow(this.length, 3);
    }
    surfaceArea(){
        return 6 * Math.pow(this.length, 2);
    }
}

const cube =new CubeMaker({
    length: 4,
    width:4,
    height:4
  
  })

  console.log(cube.volume()); 
 console.log(cube.surfaceArea()); 