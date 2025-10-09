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

// import { describe, it, expect } from "vitest";
// import { myMap } from "../myArrayUtils";

// describe("myMap", () => {
//   it("should double each number", () => {
//     const nums = [1, 2, 3];
//     const result = myMap(nums, (n) => n * 2);
//     expect(result).toEqual([2, 4, 6]);
//   });

//   it("should convert numbers to strings", () => {
//     const nums = [10, 20];
//     const result = myMap(nums, (n) => `#${n}`);
//     expect(result).toEqual(["#10", "#20"]);
//   });
// });

// import { describe, it, expect } from "vitest";
// import { myFilter } from "../myArrayUtils";

// describe("myFilter", () => {
//   it("should filter even numbers", () => {
//     const nums = [1, 2, 3];
//     const result = myFilter(nums, (n) => n % 2 === 0);
//     expect(result).toEqual([2]);
//   });

//   it("should filter numbers less than 10", () => {
//     const nums = [3, 5, 10, 30];
//     const result = myFilter(nums, (n) => n < 10);
//     expect(result).toEqual([3, 5]);
//   });
// });

import { describe, it, expect } from "vitest";
import { myReduce } from "../myArrayUtils.js";

describe("myReduce", () => {
  it("should sum all numbers", () => {
    const nums = [1, 2, 3];
    const result = myReduce(nums, (acc: number, n: number) => acc + n, 0);
    expect(result).toBe(6);
  });

  it("should concatenate strings", () => {
    const words = ["Hello", " ", "Majid"];
    const result = myReduce(words, (acc, word) => acc + word, "");
    expect(result).toBe("Hello Majid");
  });
});
