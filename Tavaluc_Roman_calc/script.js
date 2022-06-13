let a = "",
  b = "",
  sign = "",
  finish = false;

const btn = "1234567890.";
const action = "-+x/";
const output = document.querySelector("output");
const div = document.createElement("div");
div.classList.add("keyboard");
const clear = document.createElement("button");
const equal = document.createElement("button");
equal.innerHTML = "=";
equal.classList.add("mystyle");
clear.innerHTML = "ac";
document.querySelector(".calculator").appendChild(div);
document.querySelector(".keyboard").appendChild(clear).onclick = clearAll;

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  output.textContent = 0;
}

//for each symbol - create buttons
action.split("").map((symbol) => {
  div.insertAdjacentHTML(
    "beforeend",
    `<button value="${symbol}">${symbol}</button>`
  );
});

btn.split("").map((symbol) => {
  div.insertAdjacentHTML(
    "beforeend",
    `<button value="${symbol}">${symbol}</button>`
  );
});
document.querySelector(".keyboard").appendChild(equal);
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    calc(this.value);
  });
});

function calc(value) {
  output.textContent = "";
  const key = event.target.textContent;
  if (btn.includes(key)) {
    if (b === "" && sign === "") {
      if (key === "." && a.includes(".")) {
        //catch multiple .dot bug
        a += "";
        console.log(a, b, sign);
        output.textContent = a;
      } else {
        a += key;
        console.log(a, b, sign);
        output.textContent = a;
      }
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      output.textContent = b;
    } else {
      if (key === "." && b.includes(".")) {
        b += "";
        console.log(a, b, sign);
        output.textContent = b;
      } else {
        b += key;
        console.log(a, b, sign);
        output.textContent = b;
      }
    }
    return;
  }
  if (action.includes(key)) {
    sign = key;
    output.textContent = sign;
    return;
  }

  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "x":
        a = a * b;
        break;
      case "/":
        a = a / b;
        if ((a == "Infinity")) {
          // catch substract to zero
          output.textContent = "err";
          a = "";
          b = "";
          sign = "";
          return;
        }
        break;
    }
    finish = true;
    output.textContent = a;
  }
}
