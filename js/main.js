/**
 * Grab HTML elements
 * @author Patrick TUNEZERWANE
 * @since Thursday, Dec 16, 2021
 */

const usernameLabel = document.querySelector("#usernameLabel");
usernameLabel.innerHTML = "Name";
const emailLabel = document.querySelector("#emailLabel");
emailLabel.innerHTML = "Email";
const phoneLabel = document.querySelector("#phoneLabel");
phoneLabel.innerHTML = "Phone";
const companyLabel = document.querySelector("#companyLabel");
companyLabel.innerHTML = "Company";
const messageLabel = document.querySelector("#messageLabel");
messageLabel.innerHTML = "Your message";

const contactForm = document.querySelector("#contactForm");

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.getElementById("phone");
const company = document.querySelector("#company");
const message = document
  .getElementById("textarea_row")
  .getElementsByTagName("textarea")[0];

/**
 * Regexes
 * @author Patrick TUNEZERWANE
 * @since Thursday, Dec 16, 2021
 */

const isNumberChecker = /^\d+$/; // equivalent to [0 - 9]
const emailValidationchecker =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<span>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/**
 * Validate the phone input automatically when the value changes, in this function; the THIS keyword refers
 * to the phone. So, for example: this.value === phone.value
 * @author Patrick TUNEZERWANE
 * @since Thursday, Dec 16, 2021
 */

phone.oninput = function () {
  if (this.value.toString().length === 0) {
    phoneLabel.innerHTML = "Write your phone number";
  } else if (!isNumberChecker.test(this.value)) {
    phoneLabel.innerHTML =
      "<span class='error'>Phone has to be numbers!</span>";
  } else if (
    this.value.toString().length < 8 ||
    this.value.toString().length > 10
  ) {
    phoneLabel.innerHTML =
      "<span class='error'>Phone must be 8 to 10 digits</span>";
  } else {
    phoneLabel.innerHTML = "Phone";
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
      usernameLabel.innerHTML =
        "<span class='error'>Write your name and username</span>";
    } else {
      usernameLabel.innerHTML = "Name";
    }
  }

  // Validate email
  if (email) {
    if (email.value === "" || email.value === null) {
      emailLabel.innerHTML =
        "<span class='error'>Write an email (example@example.com)</span>";
    } else if (!email.value.toLowerCase().match(emailValidationchecker)) {
      emailLabel.innerHTML =
        "<span class='error'>That's not a valid email!</span> ";
    } else {
      emailLabel.innerHTML = "Email";
    }
  }

  // Validate phone
  if (phone) {
    if (phone.value.toString().length === 0) {
      phoneLabel.innerHTML =
        "<span class='error'>Write your phone number<span> ";
    } else {
      phoneLabel.innerHTML = "Phone";
    }
  }

  // Validate company
  if (company) {
    if (company.value === "" || company.value === null) {
      companyLabel.innerHTML =
        "<span class='error'>Write your company name</span> ";
    } else {
      companyLabel.innerHTML = "Company";
    }
  }

  // Validate message
  if (message) {
    if (message.value.length < 2) {
      messageLabel.innerHTML = "<span class='error'>Write your message</span> ";
    } else {
      messageLabel.innerHTML = "Message";
    }
  }
});
