export const longName = "Рошандиателлинешьяунневешенк".length; // 28 Rhoshandiatellyneshiaunneveshenk
console.log(longName);

const ruleForNameRegex = /^[A-Za-zA-Яа-яЁё\s]+$/;
export const ruleForEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const ruleForPasswordRegex =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

const invalidForm = (element) => {
  element.classList.add("invalid");
  element.classList.remove("valid");
};

const validForm = (element, error) => {
  error.textContent = "";
  element.classList.add("valid");
  element.classList.remove("invalid");
};

const validInput = (inputVal, element, elementError, errorText) => {
  if (!ruleForNameRegex.test(inputVal) || inputVal.length > longName) {
    elementError.textContent = errorText;
    element.classList.add("invalid");
    element.classList.remove("valid");
  } else {
    elementError.textContent = "";
    element.classList.add("valid");
    element.classList.remove("invalid");
  }
};

export { invalidForm, validForm, validInput };
