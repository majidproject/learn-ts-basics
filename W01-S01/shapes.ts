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
