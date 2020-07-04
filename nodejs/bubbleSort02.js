//data parameterization

arguments = process.argv;
if(arguments.length < 3) {
  throw new Error('No arguments');
}

let arr = [];
for(let i = 2; i < arguments.length; i++) {
  arr.push(Number(arguments[i]));
}

bubbleSort(arr);

function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}

console.log(arr);
