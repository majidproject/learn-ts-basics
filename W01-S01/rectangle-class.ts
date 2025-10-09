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
