# Learn TypeScript Basics

این پروژه برای تمرین مفاهیم پایه‌ی TypeScript ساخته شده است.  
در اینجا سه تابع پایه‌ی آرایه را از صفر پیاده‌سازی و تست کرده‌ایم:

- `myMap` — ایجاد آرایه‌ی جدید با تغییر در عناصر
- `myFilter` — فیلتر کردن عناصر بر اساس شرط
- `myReduce` — تجمیع داده‌ها در یک مقدار نهایی

---

## 🚀 اجرای پروژه

1. نصب وابستگی‌ها:

mkdir ../learn-ts-basics
cd ../learn-ts-basics
npm init -y
npm install --save-dev typescript vitest
npx tsc --init

2. داخل فولدر learn-ts-basics

npm init -y
npm install --save-dev typescript vitest
npx tsc --init

3. فایل tsconfig.json رو باز کن و این بخش‌ها رو بررسی یا جایگزین کن

{
"compilerOptions": {
"target": "ES2020",
"module": "ESNext",
"strict": true,
"moduleResolution": "node",
"esModuleInterop": true,
"skipLibCheck": true,
"outDir": "dist"
},
"include": ["src"]
}

4. و سپس فولدر src بساز

mkdir src

5. در package.json خط scripts رو به شکل زیر تنظیم کن

"scripts": {
"test": "vitest"
}

6. در مسیر src/myArrayUtils.ts بنویس

export function myMap<T, U>(array: T[], callback: (item: T, index: number) => U): U[] {
const result: U[] = [];
for (let i = 0; i < array.length; i++) {
result.push(callback(array[i], i));
}
return result;
}

7. در پوشه‌ی tests/ فایلی بساز به نام:📄 myArrayUtils.test.ts

import { describe, it, expect } from "vitest";
import { myMap } from "../src/myArrayUtils";

describe("myMap", () => {
it("should double each number", () => {
const nums = [1, 2, 3];
const result = myMap(nums, (n) => n \* 2);
expect(result).toEqual([2, 4, 6]);
});

it("should convert numbers to strings", () => {
const nums = [10, 20];
const result = myMap(nums, (n) => `#${n}`);
expect(result).toEqual(["#10", "#20"]);
});
});

8. بعد از ذخیره، در ترمینال بزن

npx vitest run

9. اگر همه‌چیز درست باشه، خروجی باید شبیه این باشه

✓ myMap › should double each number
✓ myMap › should convert numbers to strings

10. خلاصه‌ی کاربردی متدهای اصلی آرایه
    متد هدف توضیح کوتاه
    map() تبدیل عناصر آرایه‌ای جدید با همان طول می‌سازد؛ هر مقدار را با تابع callback به مقدار تازه‌ای تبدیل می‌کند.
    filter() انتخاب عناصر فقط عناصری را نگه می‌دارد که شرط داده‌شده را پاس می‌کنند؛ تعداد عناصر ممکن است کمتر شود.
    reduce() تجمیع عناصر همه‌ی عناصر را به یک مقدار نهایی (مثلاً جمع، میانگین یا رشته) تبدیل می‌کند.

مثال خلاصه در TypeScript:

const nums = [1, 2, 3, 4];

const mapped = nums.map(n => n \* 2); // [2, 4, 6, 8]
const filtered = nums.filter(n => n > 2); // [3, 4]
const reduced = nums.reduce((a, b) => a + b, 0); // 10
