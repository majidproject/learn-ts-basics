// export function myMap<T, U>(array: T[], callback: (item: T, index: number) => U): U[] {
//   const result: U[] = [];
//   for (let i = 0; i < array.length; i++) {
//     result.push(callback(array[i], i));
//   }
//   return result;
// }

// export function myFilter<T>(
//   array: T[],
//   callback: (item: T, index: number) => boolean
// ): T[] {
//   const result: T[] = [];
//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i)) {
//       result.push(array[i]);
//     }
//   }
//   return result;
// }

export function myReduce<T, U>(
  array: T[],
  callback: (accumulator: U, currentValue: T, index: number) => U,
  initialValue: U
): U {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i);
  }
  return accumulator;
}
