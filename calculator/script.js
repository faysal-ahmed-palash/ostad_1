const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operator = document.getElementById('operator');
const calculate = document.getElementById('calculate');
const result = document.getElementById('result');

calculate.addEventListener('click', function() {
  let number1 = parseFloat(num1.value);
  let number2 = parseFloat(num2.value);
  let operation = operator.value;

  if (isNaN(number1) || isNaN(number2)) {
    result.textContent = "Please enter valid numbers.";
    result.classList.remove("alert", "alert-success");
    result.classList.add("alert", "alert-danger");
    return;
  }

  let answer;

  switch (operation) {
    case "+":
      answer = number1 + number2;
      break;
    case "-":
      answer = number1 - number2;
      break;
    case "*":
      answer = number1 * number2;
      break;
    case "/":
      if (number2 === 0) { 
        result.textContent = "Cannot divide by zero.";
        result.classList.remove("alert", "alert-success");
        result.classList.add("alert", "alert-danger");
        return;
      }
      answer = number1 / number2;
      break;
    default:
      result.textContent = "Invalid operation.";
      result.classList.remove("alert", "alert-success");
      result.classList.add("alert", "alert-danger");
      return;
  }

  result.textContent = "Result: " + answer;
  result.classList.remove("alert", "alert-danger");
  result.classList.add("alert", "alert-success");
});
