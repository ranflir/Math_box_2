//type (x:number, y:number) -> number;
const add = (a, b) => a + b;

//type (x:number, y:number) -> number;
const substact = (a, b) => a - b;

//type (x:number, y:number) -> number;
const multiple = (a, b) => a * b;

//type (x:number, y:number) -> number;
const divide = (a, b) => {
  if (b === 0) return;
  return a / b;
};
