let lastOperator = undefined;
let nextIsDecimal = false;

const currentNumber = () => {
  return parseFloat(document.getElementById("number").innerHTML);
};

const currentSubnumber = () => {
  return parseFloat(document.getElementById("sub-number").innerHTML);
};

const updateNumber = (e) => {
  console.log(e.id);
  if (currentNumber() === 0) {
    document.getElementById("number").innerHTML = e.id;
  } else {
    if (nextIsDecimal) {
      var sumando = "." + e.id;
      nextIsDecimal = false;
    } else {
      var sumando = e.id;
    }
    document.getElementById("number").innerHTML =
      currentNumber().toString() + sumando;
  }
};

const result = () => {
  if (lastOperator === undefined) {
    return alert("Select an operator before");
  }

  switch (lastOperator) {
    case "rest":
      document.getElementById("number").innerHTML =
        currentSubnumber() - currentNumber();
      break;
    case "sum":
      document.getElementById("number").innerHTML =
        currentNumber() + currentSubnumber();
      break;
    case "division":
      document.getElementById("number").innerHTML =
        currentSubnumber() / currentNumber();
      break;
    case "multiplication":
      document.getElementById("number").innerHTML =
        currentNumber() * currentSubnumber();
      break;
  }
  lastOperator = undefined;
  document.getElementById("sub-number").innerHTML = 0;
};

const resetValue = () => {
  savedValue = false;
  document.getElementById("number").innerHTML = 0;
};

const resetAllValues = () => {
  savedValue = false;
  document.getElementById("number").innerHTML = 0;
  document.getElementById("sub-number").innerHTML = 0;
};

const sumar = () => {
  lastOperator = "sum";
  setSubNumber();
};

const resta = () => {
  lastOperator = "rest";
  setSubNumber();
};

const division = () => {
  lastOperator = "division";
  setSubNumber();
};

const multiplication = () => {
  lastOperator = "multiplication";
  setSubNumber();
};

const changeValue = () => {
  document.getElementById("number").innerHTML =
    -document.getElementById("number").innerHTML;
};

const decimal = () => {
  nextIsDecimal = true;
};

const setSubNumber = () => {
  document.getElementById("sub-number").innerHTML = currentNumber();
  document.getElementById("number").innerHTML = 0;
};
