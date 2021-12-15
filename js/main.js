//Grab elements
const contactForm = document.querySelector("#contactForm");
const errorName = document.querySelector("#errorName");
const errorEmail = document.querySelector("#errorEmail");
const errorPhone = document.querySelector("#errorPhone");
const errorCompany = document.querySelector("#errorCompany");
const errorMessage = document.querySelector("#errorMessage");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.getElementById("phone");
const company = document.querySelector("#company");
const message = document.querySelector("#message");

const isNumberChecker = /^\d+$/; // equivalent to [0 - 9]
const emailValidationchecker =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

phone.oninput = function () {
  console.log("=====>>", typeof phone.value);
  // The this keyword is pointing to the phone
  if (this.value.toString().length === 0) {
    errorPhone.innerHTML = "Write your phone number";
  } else if (!isNumberChecker.test(this.value)) {
    errorPhone.innerHTML = "That's a funny phone! it has to be numbers!";
  } else if (
    this.value.toString().length < 8 ||
    this.value.toString().length > 10
  ) {
    errorPhone.innerHTML = "Phone must be 8 to 10 digits";
  } else {
    errorPhone.innerHTML = null;
  }
};

// prevent default behavoir and validate form
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username) {
    if (username.value === "" || username.value === null) {
      errorUsername.innerHTML = "Write your name and username";
    } else {
      errorUsername.innerHTML = null;
    }
  }

  if (email) {
    if (email.value === "" || email.value === null) {
      errorEmail.innerHTML = "Write an email (example@example.com)";
    } else if (!email.value.toLowerCase().match(emailValidationchecker)) {
      errorEmail.innerHTML = "That's not a valid email!";
    } else {
      errorEmail.innerHTML = null;
    }
  }

  if (phone) {
    if (phone.value.toString().length === 0) {
      errorPhone.innerHTML = "Write your phone number";
    }
  }

  if (company) {
    if (company.value === "" || company.value === null) {
      errorCompany.innerHTML = "Write your company name";
    } else {
      errorCompany.innerHTML = null;
    }
  }

  if (message) {
    if (message.value === "" || message.value === null) {
      errorMessage.innerHTML = "Write your message";
    } else {
      errorMessage.innerHTML = null;
    }
  }
});
