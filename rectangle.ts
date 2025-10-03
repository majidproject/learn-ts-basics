interface Rectangle {
  height: number;
  width: number;
  area: () => number;
}

const myRectangle: Rectangle = {
  height: 6,
  width: 4,
  area: function () {
    return this.height * this.width;
  },
};

console.log("Rectangle area: ", myRectangle.area());