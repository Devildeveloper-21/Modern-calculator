const equal = document.querySelector(".equal");
const buttons = document.querySelector(".buttons");
const displayExpression = document.querySelector(".displayExpression");

let expression = "";
buttons.addEventListener("click", function (e) {
  if (e.target.classList.contains("number")) {
    expression += e.target.innerText;
  } else if (e.target.classList.contains("operator")) {
    expression += e.target.innerText;
  } else if (e.target.id === "delete") {
    expression = expression.slice(0, -1);
  } else if (e.target.id === "clearAll") {
    expression = "";
  }
  console.log(expression);
  displayExpression.innerText = expression;
});
