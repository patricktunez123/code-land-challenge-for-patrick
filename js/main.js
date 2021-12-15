/**
 * Grab HTML elements
 * @author Patrick TUNEZERWANE
 * @since Thursday, Dec 16, 2021
 */

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

/**
 * Regexes
 * @author Patrick TUNEZERWANE
 * @since Thursday, Dec 16, 2021
 */

const isNumberChecker = /^\d+$/; // equivalent to [0 - 9]
const emailValidationchecker =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Validate the phone input automatically when the value changes, in this function; the THIS keyword refers
 * to the phone. So, for example: this.value === phone.value
 * @author Patrick TUNEZERWANE
 * @since Thursday, Dec 16, 2021
 */

phone.oninput = function () {
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

/**
 * Prevent default behavoir of HTML forms and validate form inputs
 * @author Patrick TUNEZERWANE
 * @since Thursday, Dec 16, 2021
 */
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validate username and name
  if (username) {
    if (username.value === "" || username.value === null) {
      errorUsername.innerHTML = "Write your name and username";
    } else {
      errorUsername.innerHTML = null;
    }
  }

  // Validate email
  if (email) {
    if (email.value === "" || email.value === null) {
      errorEmail.innerHTML = "Write an email (example@example.com)";
    } else if (!email.value.toLowerCase().match(emailValidationchecker)) {
      errorEmail.innerHTML = "That's not a valid email!";
    } else {
      errorEmail.innerHTML = null;
    }
  }

  // Validate phone
  if (phone) {
    if (phone.value.toString().length === 0) {
      errorPhone.innerHTML = "Write your phone number";
    }
  }

  // Validate company
  if (company) {
    if (company.value === "" || company.value === null) {
      errorCompany.innerHTML = "Write your company name";
    } else {
      errorCompany.innerHTML = null;
    }
  }

  // Validate message
  if (message) {
    if (message.value === "" || message.value === null) {
      errorMessage.innerHTML = "Write your message";
    } else {
      errorMessage.innerHTML = null;
    }
  }
});
