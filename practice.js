var myArray = [];

function addToArray() {
  var inputValue = document.getElementById("myInput").value;
  myArray.push(parseInt(inputValue)); // Parse input value as an integer
  document.getElementById("myInput").value = ""; // Clear the input field
  document.getElementById("result").textContent = "Array: " + myArray;

  var sum = calculateSum(myArray);
  document.getElementById("sum").textContent = "Sum: " + sum;
}

function calculateSum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}


