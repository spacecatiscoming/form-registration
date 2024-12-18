import {
  form,
  firstNameInput,
  lastNameInput,
  emailInput,
  passwordInput,
  passwordConfirm,
  birthDayInput,
  submitButton,
  inputs,
  nameError,
  lastNameError,
  emailError,
  passwordError,
  passwordConfirmError,
  birthDayError,
} from "./domElements.js";

import {
  invalidForm,
  validForm,
  validInput,
  ruleForEmailRegex,
  ruleForPasswordRegex,
  longName,
} from "./helperFunctions.js";

const errors = [
  "В имени должны содержаться только буквы, длина должна быть 28 букв!",
  "Фамилия должна содержать только буквы и длина должна быть 28 букв!",
  "Неправильно указан email!",
  "Пароль должен содержать минимум одну цифру, по одной заглавной и строчную буквы и один символ!",
  "Проверьте совпадают ли пароли!",
  "Вы должны быть старше 18 лет!",
];

// Функция для проверки поля Имя
const checkName = () => {
  const getValue = firstNameInput.value.trim();

  if (getValue === "" || getValue.length < 2) {
    firstNameInput.classList.remove("invalid");
    firstNameInput.classList.remove("valid");
    nameError.textContent = "";
    return;
  }
  validInput(getValue, firstNameInput, nameError, errors[0]);
};

checkName();

firstNameInput.addEventListener("input", checkName);

// Функция для проверки поля Фамилия
const checkLastName = () => {
  const getValue = lastNameInput.value.trim();
  if (getValue === "" || getValue.length < 2) {
    lastNameInput.classList.remove("invalid");
    lastNameInput.classList.remove("valid");
    lastNameError.textContent = "";
    return;
  }
  validInput(getValue, lastNameInput, lastNameError, errors[1]);
};

lastNameInput.addEventListener("input", checkLastName);

// Функция для проверки Email
const checkEmail = () => {
  const getValue = emailInput.value.trim();
  if (getValue === "") {
    emailInput.classList.remove("invalid");
    emailInput.classList.remove("valid");
    emailError.textContent = "";
    return;
  }

  if (!ruleForEmailRegex.test(getValue)) {
    emailError.textContent = errors[2];
    invalidForm(emailInput);
    return false;
  } else {
    validForm(emailInput, emailError);
  }
  return true;
};

emailInput.addEventListener("input", checkEmail);

// Функция для проверки пароля
const checkPassword = () => {
  const getValue = passwordInput.value;
  if (getValue === "") {
    passwordInput.classList.remove("invalid");
    passwordInput.classList.remove("valid");
    passwordError.textContent = "";
    return;
  }

  if (!ruleForPasswordRegex.test(getValue)) {
    passwordError.textContent = errors[3];
    invalidForm(passwordInput);
  } else {
    validForm(passwordInput, passwordError);
  }
};

passwordInput.addEventListener("input", checkPassword);

// Функция совпадения паролей
const checkConfirmPassword = () => {
  if (passwordInput.value !== passwordConfirm.value) {
    passwordConfirmError.textContent = errors[4];
    invalidForm(passwordConfirm);
    return false;
  } else {
    validForm(passwordConfirm, passwordConfirmError);
  }
};

passwordConfirm.addEventListener("input", checkConfirmPassword);

// Функция для проверки Даты рождения
const checkBirthDay = () => {
  const getBirthDay = new Date(birthDayInput.value);
  const today = new Date();

  const getAge = today.getFullYear() - getBirthDay.getFullYear();

  if (getAge < 18) {
    birthDayError.textContent = errors[5];
    invalidForm(birthDayInput);
    return false;
  } else {
    validForm(birthDayInput, birthDayError);
  }
};

birthDayInput.addEventListener("input", checkBirthDay);

form.addEventListener("input", function (e) {
  e.preventDefault();

  const validInputs = [...inputs].every((input) =>
    input.classList.contains("valid")
  );

  if (validInputs && checkConfirmPassword) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  this.textContent = "Успешно.";

  inputs.forEach((input) => {
    input.value = "";
    input.classList.remove("valid");
  });
});

// React.123357
