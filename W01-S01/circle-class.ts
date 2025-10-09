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
