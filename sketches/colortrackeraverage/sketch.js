let img
function preload(){
img = loadImage('14.png');
img3 = loadImage('13.png')
img2 = loadImage('16.png')
}
// let x;// globally scope var
let particles = []


function setup() {
 let canvas =createCanvas(w, h);
 canvas.parent("#sketch-parent")
  pixelDensity(2);

 for(let i=0; i<100; i++) {
   let p = new Particle();
   particles.push(p);
 }
}

function draw() {
 background(0,50);
 noStroke()
   for(let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.draw();
    p.update();
    if (p.age > p.lifespan) {
    particles.splice(i,1);
    let newP = new Particle();
    particles.push(newP)
    }
  }
}

class Particle {
  
  constructor() {
    // this.x = random(width);
    // this.y = random(height);
    this.pos = createVector(random(width),random(height));
    this.vel = createVector(random(-0.1,0.1), random(-1,1))
    this.acc = createVector(random(-0.01, 0.01), random(-0.01, 0.01));
    this.color = color(255, 255);
    // this.color = color(random(255),random(255), random(255))
    this.size = random(30, 100);
    this.drag = .99
    this.lifespan = random(700.1500)
    this.age = 0
  }

    
    checkWalls() {
     if(this.pos.y > (height - this.size)) {
      this.vel.y *= -1;
      this.pos.y = height-this.size;
    }
    
    if(this.pos.y < 0) {
      this.vel.y *= -1;
      this.pos.y = 0;
    }
    
    if(this.pos.x > width - this.size) {
      this.vel.x *= -1;
      this.pos.x = width-this.size;
    }
    
    if(this.pos.x < 0) {
      this.vel.x *= -1;
      this.pos.x = 0;
      this.checkWalls();
    }}
    
    update() 
   { this.vel.add(this.acc);
    this.vel.mult(this.drag);
    this.pos.add(this.vel);
    this.checkWalls();
    this.age++;
    let pAlpha = this.lifespan - this.age;
    this.color = color(255, pAlpha)
    }

   draw() {
    fill(this.color);
    //tint(255, 255, 0);
    //ellipse(this.pos.x, this.pos.y, this.size/4, this.size/4);
    image(img, this.pos.x, this.pos.y, this.size, this.size);
     image(img2, this.pos.x*2, this.pos.y, this.size, this.size);
     image(img3, this.pos.x, this.pos.y, this.size, this.size);
     
  }
}