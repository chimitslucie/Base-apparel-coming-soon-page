function ValidateEmail(input) {
    var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let errormessage = document.querySelector(".error__message");

    if (!input.value.match(validRegex)) {
        errormessage.style.display = "block";
    } else {
        errormessage.style.display = "none";
    }

    let erroricon = document.querySelector(".error__icon");

    if (!input.value.match(validRegex)) {
        erroricon.style.display = "block";
    } else {
        erroricon.style.display = "none";
    }

    let errorborder = document.querySelector(".form-control");

    if (!input.value.match(validRegex)) {
        errorborder.style.border = "1px solid #f96464";
    } else {
        errorborder.style.border = "1px solid rgba(206, 152, 152, 0.49)";
    }
}

let button = document.querySelector(".request__btn");

button.addEventListener("click", (e) => {
    let inputelement = document.querySelector("input[name=email]");
    ValidateEmail(inputelement);
});
