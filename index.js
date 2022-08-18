let result = document.getElementById("result");
let num1;
let num2;





function plus() {
    num1 = document.getElementById("num1-el").value
    num1 = parseInt(num1)
    num2 = document.getElementById("num2-el").value
    num2 = parseInt(num2)
    result.innerHTML = num1 + num2
}


function minus() {
    num1 = document.getElementById("num1-el").value
    num1 = parseInt(num1)
    num2 = document.getElementById("num2-el").value
    num2 = parseInt(num2)
    result.innerHTML = num1 - num2
}

function divide() {
    num1 = document.getElementById("num1-el").value
    num1 = parseInt(num1)
    num2 = document.getElementById("num2-el").value
    num2 = parseInt(num2)
    result.innerHTML = num1 / num2
}

function multiply() {
    num1 = document.getElementById("num1-el").value
    num1 = parseInt(num1)
    num2 = document.getElementById("num2-el").value
    num2 = parseInt(num2)
    result.innerHTML = num1 * num2
}