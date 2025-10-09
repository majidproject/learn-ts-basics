/**
 * 💻 Developed by: **Majid Mansouri**
 * Role: Full-Stack Developer | Software Engineer
 *
 * Project Goal: Part of the comprehensive 12-Month Full-Stack Learning Roadmap.
 *
 * Contact: mm.project.8902@gmail.com
 * LinkedIn: https://www.linkedin.com/in/majid-mansouri-a8163866
 * Portfolio: https://majidproject.github.io/web-portfolio/
 *
 * Status: Educational/Personal Use Only
 */

// class Parent {
//   // خصوصیات مشترک
//   constructor(...) { ... }

//   commonMethod() { ... }
// }

// class Child extends Parent {
//   // خصوصیات مخصوص به خودش
//   constructor(...) {
//     super(...); // صدا زدن constructor والد
//   }

//   childMethod() { ... }
// }

// کلاس پایه
class Shape {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe(): void {
    console.log(`This is a ${this.name}.`);
  }
}

// کلاس Circle که از Shape ارث می‌بره
class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super("Circle"); // صدا زدن constructor والد
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// کلاس Rectangle که از Shape ارث می‌بره
class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

// تست
const c1 = new Circle(5);
c1.describe();
console.log("Circle area:", c1.area());

const r1 = new Rectangle(4, 6);
r1.describe();
console.log("Rectangle area:", r1.area());
