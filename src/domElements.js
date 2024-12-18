// Сделать выборку Элементов.
const form = document.querySelector("#form");

// Имя
const firstNameInput = document.querySelector("#first-name");
const nameError = document.querySelector("#first-name-error");
// Фамилия
const lastNameInput = document.querySelector("#last-name");
const lastNameError = document.querySelector("#last-name-error");
// Почта
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
// Пароль
const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector("#password-error");
// Подтверждение пароля
const passwordConfirm = document.querySelector("#password-confirm");
const passwordConfirmError = document.querySelector("#password-confirm-error");
// Дата Рождения
const birthDayInput = document.querySelector("#birth-day");
const birthDayError = document.querySelector("#birth-day-error");
// Кнопка Отправить
const submitButton = document.querySelector("#form-button");

const inputs = document.querySelectorAll("#form input");

export {
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
};
