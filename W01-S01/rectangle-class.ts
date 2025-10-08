class Rectangle {
  height: number;
  width: number;

  constructor(h: number, w: number) {
    this.height = h;
    this.width = w;
  }

  area(): number {
    return this.height * this.width;
  }
}

const myRectangle = new Rectangle(6, 4);
console.log("Rectangle Area: ", myRectangle.area());
