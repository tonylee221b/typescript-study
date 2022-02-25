function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log('Result: ' + num);
}
// void is able to work with functions
// but NOT undefined -> if there is return, then it is usable.

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (n1: number, n2: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8))

addAndHandle(10, 20, (result) => {
  console.log(result);
})
