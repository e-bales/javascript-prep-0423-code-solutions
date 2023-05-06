// create your loops here.
function whileLoop1() {
  const myArray = [];
  let myVar = 0;
  while (myVar < 10) {
    myArray.push(myVar);
    myVar++;
  }
  return myArray;
}
console.log('my loop1 output', whileLoop1());

function whileLoop2() {
  const myArray = [];
  let myVar = 0;
  while (myVar <= 18) {
    myArray.push(myVar);
    myVar += 2;
  }
  return myArray;
}
console.log('my loop2 output', whileLoop2());

function forLoop1() {
  const myArray = [];
  for (let i = 0; i < 10; i++) {
    myArray.push(i);
  }
  return myArray;
}
console.log('my loop3 output', forLoop1());

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time till explosion ' + i + '!');
  }
}
forLoop2();

function forInLoop1(object) {
  const myArray = [];
  for (const keys in object) {
    myArray.push(keys);
  }
  return myArray;
}
const myObject = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
console.log('my for in loop1', forInLoop1(myObject));

function forInLoop2(object) {
  const myArray = [];
  for (const keys in object) {
    myArray.push(object[keys]);
  }
  return myArray;
}
console.log('my for in loop2', forInLoop2(myObject));
