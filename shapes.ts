interface Circle {
  radius: number;
  area: () => number;
}

const myCircle: Circle = {
  radius: 5,
  area: function () {
    return Math.PI * this.radius * this.radius;
  },
};

console.log("Circle area:", myCircle.area());
