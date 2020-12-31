const carMakers: string[] = [];
// Note: We don't need the annotation if the array is already an array of strings:
const planeMakers = ['airbus', 'boeing'];

const dates = [new Date(), new Date()];

// 2D array of strings:
const carsByMake: string[][] = [];
// const carsByMake = [
//   ['f150'],
//   ['corrola'],
//   ['camaro']
// ]

// Helps with inference when extracting values
const plane = planeMakers[0];
const myPlane = planeMakers.pop();

// Prevents incompatible values
carMakers.push(100); // ERROR!

// Helps with map
planeMakers.map(plane => {
  return plane; // Inferred as string
});

// Flexible types
const importantDates: (string | Date)[] = [];
importantDates.push('2020-10-30');
importantDates.push(new Date());
