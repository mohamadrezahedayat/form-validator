const form = document.getElementById("form");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordMatch = false;

function validateForm() {
  // Using Constraint API
  isValid = form.checkValidity();

  // Style main message for an error
  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    return;
  }
  if (password1El.value === password2El.value) {
    passwordMatch = true;
    password1El.style.color = "green";
    password2El.style.color = "green";
  } else {
    passwordMatch = false;
    message.textContent = "Make sure passwords match.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1El.style.color = "red";
    password2El.style.color = "red";
    return;
  }
  //   If form is valid and password match
  if (isValid && passwordMatch) {
    message.textContent = "Successfuly Registered!";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  // Do something with user data
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
  // submit data if valid
  if (isValid && passwordMatch) {
    storeFormData();
  }
}
// Event Listener
form.addEventListener("submit", processFormData);
