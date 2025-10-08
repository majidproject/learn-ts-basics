// --- Exercise 1: sum ---
function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(3, 7)); // 10
console.log(sum(-2, 5)); // 3



// --- Exercise 2: greet ---
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet("Majid")); 



// --- Exercise 3: isEven ---
function isEven(num: number): boolean {
  return num % 2 === 0 ;
}

console.log(isEven(4)); 
console.log(isEven(7)); 



// --- Exercise 4: printId ---
function printId(id: string | number): void {
  console.log(`Your ID is ${id}`);
}

printId(123);
printId("abc123");



// --- Exercise 5: sumArray ---
function sumArray(numbers: number[]): number {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}

console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([10, -5, 7]));  // 12



// --- Exercise 6: formatUser ---
type UserTuple = [string, number];

function formatUser(userData: UserTuple): string {
  const [name, age] = userData;

  return `Name: ${name}, Age: ${age}`;
}

console.log(formatUser(["Majid", 47]));



// --- Exercise 7: getDirectionMessage ---
enum Direction {
  Up,
  Down,
  Left,
  Right
}

function getDirectionMessage(dir: Direction): string {
  switch (dir) {
    case Direction.Up:
      return "You are moving up!";
    case Direction.Down:
      return "You are moving down!";
    case Direction.Left:
      return "You are moving left!";
    case Direction.Right:
      return "You are moving right!";
    default:
      return "Unknown direction!";
  }
}

console.log(getDirectionMessage(Direction.Left));
console.log(getDirectionMessage(Direction.Up));



// --- Exercise 8: greetUser ---
function greetUser(name: string, greeting?: string): string {
  if (greeting) {
    return `Hi ${name}, ${greeting}`;
  } else {
    return `Hi ${name}`;
  }
}

console.log(greetUser("Majid", "welcome back!")); // Hi Majid, welcome back!
console.log(greetUser("Sara")); // Hi Sara



// --- Exercise 9: greetUserDefault ---
function greetUserDefault(name: string, greeting: string = "nice to see you!"): string {
  return `Hi ${name}, ${greeting}`;
}

console.log(greetUserDefault("Majid", "welcome back!"));// Hi Majid, welcome back!
console.log(greetUserDefault("Sara"));// Hi Sara, nice to see you!



// --- Exercise 10: describeShape ---
function describeShape(shape: string, size: number): string {
  return `The shape ${shape}, has a size of ${size}`;
}

console.log(describeShape("Circle", 5));
console.log(describeShape("Rectangle", 10));