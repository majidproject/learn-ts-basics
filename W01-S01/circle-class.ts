class Circle {
  radius: number;

  constructor(r: number) {
    this.radius = r;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

const c1 = new Circle(5);
console.log("Circle area:", c1.area());
