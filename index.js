var inputRight = document.createElement("input");
inputRight.type = "number";
var inputLeft = document.createElement("input");
inputLeft.type = "number";
var buttonPlus = document.createElement("button");
buttonPlus.innerText = "+";
var buttonMinus = document.createElement("button");
buttonMinus.innerText = "-";
var buttonMultiply = document.createElement("button");
buttonMultiply.innerText = "*";
var buttonDivide = document.createElement("button");
buttonDivide.innerText = "/";
var h1 = document.createElement("h1");
h1.className = "h1";
var CalculatorHandler = function (symbol) {
    var rightValue = +inputRight.value;
    var leftValue = +inputLeft.value;
    if (symbol === "+") {
        var sum = rightValue + leftValue;
        h1.innerText = "result: ".concat(sum);
    }
    else if (symbol === "-") {
        var sum = rightValue - leftValue;
        h1.innerText = "result: ".concat(sum);
    }
    else if (symbol === "*") {
        var sum = rightValue * leftValue;
        h1.innerText = "result: ".concat(sum);
    }
    else if (symbol === "/") {
        var sum = rightValue / leftValue;
        h1.innerText = "result: ".concat(sum);
    }
    inputRight.value = "";
    inputLeft.value = "";
};
buttonPlus.addEventListener("click", function () { return CalculatorHandler("+"); });
buttonMinus.addEventListener("click", function () { return CalculatorHandler("-"); });
buttonMultiply.addEventListener("click", function () { return CalculatorHandler("*"); });
buttonDivide.addEventListener("click", function () { return CalculatorHandler("/"); });
document.body.append(inputRight, inputLeft, buttonPlus, buttonMinus, buttonMultiply, buttonDivide, h1);
