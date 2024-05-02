const form = document.getElementById("myForm");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");
const thankYou = document.getElementById("thank-u-content");

// error handling function
const showError = (field, errtxt) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerHTML = errtxt;
    field.closest(".form-group").appendChild(errorElement);
};

// password strength checking function
const checkPasswordStrength = (password) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*]).{8,}$/.test(password);

// validate password
const validatePassword = (password) => {
    if (password === "") {
        showError(passwordInput, "Enter Your Password");
    } else if (!checkPasswordStrength(password)) {
        showError(passwordInput, "Please enter at least 8 characters with a number, symbol, lowercase, and uppercase letter.");
    }
};

// form data handling
const handleFormData = (e) => {
    e.preventDefault();
    const [fullnameInput, emailInput, dateInput, genderInput] = ["fullname", "email", "date", "gender"].map((id) => document.getElementById(id));

    const [fullname, email, password, date, gender] = [fullnameInput, emailInput, passwordInput, dateInput, genderInput].map((input) => input.value.trim());

    const emailPattern = /^[^ ]+\.[a-z]{1,3}/;
    document.querySelectorAll(".form-group .error").forEach((field) => field.classList.remove("remove"));
    document.querySelectorAll(".error-text").forEach((errtxt) => errtxt.remove());

    if (fullname === "") showError(fullnameInput, "Enter Your full name");
    if (!emailPattern.test(email)) showError(emailInput, "Enter a Valid email address");
    validatePassword(password);
    if (date === "") showError(dateInput, "Select your date of birth");
    if (gender === "") showError(genderInput, "Select your gender");

    if (!document.querySelectorAll(".form-group .error").length) {
        form.style.display = "none";
        thankYou.style.display = "block";
    }
};

// toggle password
passToggleBtn.addEventListener("click", () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

// form submit event handling
form.addEventListener('submit', handleFormData);
