const inputRight = document.createElement("input");
inputRight.type = "number";

const inputLeft = document.createElement("input");
inputLeft.type = "number";

const buttonPlus = document.createElement("button");
buttonPlus.innerText = "+";

const buttonMinus = document.createElement("button");
buttonMinus.innerText = "-";

const buttonMultiply = document.createElement("button");
buttonMultiply.innerText = "*";


const buttonDivide = document.createElement("button");
buttonDivide.innerText = "/";

const h1 = document.createElement("h1");
h1.className = "h1";

const CalculatorHandler = (symbol: string) => {
  const rightValue = +inputRight.value;
  const leftValue = +inputLeft.value;

  if (symbol === "+") {
    const sum = rightValue + leftValue;
    h1.innerText = `result: ${sum}`;
  } else if (symbol === "-") {
    const sum = rightValue - leftValue;
    h1.innerText = `result: ${sum}`;
  } else if (symbol === "*") {
    const sum = rightValue * leftValue;
    h1.innerText = `result: ${sum}`;
  }  else if (symbol === "/") {
    const sum = rightValue / leftValue;
    h1.innerText = `result: ${sum}`;
  }

  inputRight.value = "";
  inputLeft.value = "";
};

buttonPlus.addEventListener("click", () => CalculatorHandler("+"));
buttonMinus.addEventListener("click", () => CalculatorHandler("-"));
buttonMultiply.addEventListener("click", () => CalculatorHandler("*"));
buttonDivide.addEventListener("click", () => CalculatorHandler("/"));
document.body.append(
  inputRight,
  inputLeft,
  buttonPlus,
  buttonMinus,
  buttonMultiply,
  buttonDivide,
  h1
);
