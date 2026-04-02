import React, { useRef } from 'react';
import Sketch from 'react-p5';

const SteeringText = () => {
  const fontRef = useRef(null);
  const vehiclesRef = useRef([]);
  const setupDoneRef = useRef(false);

  class Vehicle {
    constructor(p, x, y) {
      this.p = p;
      this.pos = p.createVector(p.random(p.width), p.random(p.height));
      this.target = p.createVector(x, y);
      this.vel = p.constructor.Vector.random2D();
      this.acc = p.createVector();
      this.maxspeed = 7;
      this.maxforce = 0.15;
    }

    behaviors() {
      let arrive = this.arrive(this.target);
      let mouse = this.p.createVector(this.p.mouseX, this.p.mouseY);
      let flee = this.flee(mouse);
      this.applyForce(arrive);
      this.applyForce(flee.mult(5));
    }

    applyForce(f) { this.acc.add(f); }
    update() {
      this.pos.add(this.vel);
      this.vel.add(this.acc);
      this.acc.mult(0);
    }

    show() {
      this.p.stroke('#800000'); 
      // INCREASED STROKEWEIGHT: This fills the "hollow" gaps by making dots bigger
      this.p.strokeWeight(7); 
      this.p.point(this.pos.x, this.pos.y);
    }

    arrive(target) {
      let desired = this.p.constructor.Vector.sub(target, this.pos);
      let speed = this.p.map(desired.mag(), 0, 100, 0, this.maxspeed);
      return desired.setMag(speed).sub(this.vel).limit(this.maxforce);
    }

    flee(target) {
      let desired = this.p.constructor.Vector.sub(target, this.pos);
      if (desired.mag() < 50) {
        return desired.setMag(this.maxspeed).mult(-1).sub(this.vel).limit(this.maxforce);
      }
      return this.p.createVector(0, 0);
    }
  }

  const preload = (p5) => {
    fontRef.current = p5.loadFont('/assets/SourceCodePro-Bold.ttf');
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 150).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.clear();

    if (fontRef.current && fontRef.current.font && !setupDoneRef.current) {
      // INCREASED SAMPLEFACTOR: This places dots closer together along the path
      const points = fontRef.current.textToPoints('Brian Nguyen', 50, 110, 100, {
        sampleFactor: 0.15, 
      });

      vehiclesRef.current = points.map(pt => new Vehicle(p5, pt.x, pt.y));
      setupDoneRef.current = true;
    }

    // This part below is your "loop"—it iterates through every vehicle every frame
    for (let v of vehiclesRef.current) {
      v.behaviors();
      v.update();
      v.show();
    }
  };

  return <Sketch preload={preload} setup={setup} draw={draw} />;
};

export default SteeringText;