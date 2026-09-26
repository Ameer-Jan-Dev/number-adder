//! Selecting the elements
alert("Add Two Numbers");
let addButton = document.getElementById("result");
// Event
addButton.addEventListener("click", () => {
  let num1 = document.getElementById("btn1").value;
  let num2 = document.getElementById("btn2").value;
  let result = document.getElementById("value");

  //* Perform calc
  let sum = parseFloat(num1) + parseFloat(num2);

  result.innerHTML =
    '<pre class="result-last">Result</pre>' +
    '<i class="fas fa-equals icon"></i>' +
    sum;
});
