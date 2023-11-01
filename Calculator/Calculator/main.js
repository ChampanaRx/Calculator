const buttons = document.querySelectorAll ("button")
const screenDisplay = document.querySelector (".screen")

let calculation = [];
let inputValue

function calculate (button) {
  const value = button.textContent
  if (value === "CLEAR" ) {
    calculation = []
    screenDisplay.textContent = "0"
  } else if (value === "="){
    screenDisplay.textContent = eval(inputValue)
  } else {
  calculation.push(value)
  inputValue = calculation.join("")
  screenDisplay.textContent = inputValue
  }
}

buttons.forEach(button => button.addEventListener("click", () => calculate (button)))
