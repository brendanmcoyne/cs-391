console.log("projects.html")

function AddFunc() {
    const x = document.getElementById("number-1").value;
    const y = document.getElementById("number-2").value;
    const num1 = Number(x);
    const num2 = Number(y);
    let num3 = num1 + num2;
    document.getElementById("answers").innerHTML = String(num3);
}

function SubFunc() {
    const x = document.getElementById("number-1").value;
    const y = document.getElementById("number-2").value;
    const num1 = Number(x);
    const num2 = Number(y);
    let num3 = num1 - num2;
    document.getElementById("answers").style.visibility = "visible";
    document.getElementById("answers").innerHTML = String(num3);
}

function MultFunc() {
    const x = document.getElementById("number-1").value;
    const y = document.getElementById("number-2").value;
    const num1 = Number(x);
    const num2 = Number(y);
    let num3 = num1 * num2;
    document.getElementById("answers").style.visibility = "visible";
    document.getElementById("answers").innerHTML = String(num3);
}

function DivFunc() {
    const x = document.getElementById("number-1").value;
    const y = document.getElementById("number-2").value;
    const num1 = Number(x);
    const num2 = Number(y);
    let num3 = num1 / num2;
    document.getElementById("answers").style.visibility = "visible";
    document.getElementById("answers").innerHTML = String(num3);
}

function PowFunc() {
    const x = document.getElementById("number-1").value;
    const y = document.getElementById("number-2").value;
    const num1 = Number(x);
    const num2 = Number(y);
    let num3 = 1;
        for (i = 0; i < num2; i++) {
            num3 = num3 * num1;
        }
    document.getElementById("answers").style.visibility = "visible";
    document.getElementById("answers").innerHTML = String(num3);
}

function Clear() {
    document.getElementById("answers").style.visibility = "hidden";
    document.getElementById("number-1").value = "";
    document.getElementById("number-2").value = "";
}