let error = document.querySelector("#error");
let form = document.querySelector("form");
let username = document.querySelector("#username");
let password = document.querySelector("#password");

// let validateEmail = (username) =>
//   return username.match(
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   );
// }; khoai quá bỏ

form.addEventListener("submit", (event) => {
    let errorWarning = [];
    if (username.value == "" || username.value == null) {
        errorWarning.push("Username can not be blank!");
    }
    if (password.value.length < 8) {
        errorWarning.push("Password must be at least 8 characters in length!");
    }
    if (errorWarning) {
        event.preventDefault();
        error.innerText = errorWarning.join(" | ");
        console.log("Welcome " + username.value + "!")
    }
});