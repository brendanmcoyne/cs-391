console.log("index.html")

function checkAge() {
    const ageInput = document.getElementById("age-input").value;
    const age = Number(ageInput);
    let errorMessage = "";
    console.log(age);
    if (isNaN(age)) {
        errorMessage = "Age must be a number.";
    }
    if (!Number.isInteger(age)) {
        errorMessage = "Age must be an integer.";
    }
    if (age < 0) {
        errorMessage = "Age must be positive.";
    }
    if (age < 18 || age > 120) {
        errorMessage = "Invalid age.";
    }
    if (errorMessage === "") {
        document.getElementById("main-content").style.visibility = "visible";
        document.getElementById("error-content").style.visibility = "hidden";
    } else {
        document.getElementById("main-content").style.visibility = "hidden";
        document.getElementById("error-content").style.visibility = "visible";
        document.getElementById("error-message").innerHTML = errorMessage;
    }
}