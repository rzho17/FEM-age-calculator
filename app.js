const variables = (() => {
  const year = document.querySelector(".yearNum");
  const month = document.querySelector(".monthNum");
  const day = document.querySelector(".dayNum");

  const dayInput = document.querySelector("#day");
  const monthInput = document.querySelector("#month");
  const yearInput = document.querySelector("#year");

  return { year, month, day, dayInput, monthInput, yearInput };
})();

const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const currentDateInMonth = (month, year) => {
  return new Date(year, month, 0).getDay();
};

const inputValidation = (day, year, month, currentYear) => {
  if (
    day <= 31 ||
    (day >= 1 && month <= 12) ||
    (month >= 1 && year <= currentYear)
  ) {
    removeErrorColors();
  }
  if (day === "" && month === "" && year === "") {
    showErrorInput();
    errorEmptyField();
  }

  if (day > 31 || day < 1 || day > daysInMonth(month, year)) {
    showErrorInput();
    errorDayField();
  } else {
    clearErrorMsgDay("day");
    // removeErrorColors();
  }
  if (month > 12 || month < 1) {
    showErrorInput();
    errorMonthField();
  } else {
    clearErrorMsgDay("month");
  }
  if (year > currentYear) {
    showErrorInput();
    errorYearField();
  } else {
    clearErrorMsgDay("year");
  }

  // if (day > daysInMonth(month, year) || day === "") {
  //   console.log("invalid");
  // } else {
  //   console.log("valid");
  // }
};

const formSubmit = (() => {
  const form = document.querySelector("form");
  const date = new Date();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userDay = parseInt(variables.dayInput.value);
    const userMonth = parseInt(variables.monthInput.value);
    const userYear = parseInt(variables.yearInput.value);

    let currentDay = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();

    let resultDay;
    let resultMonth;
    let resultYear;

    if (currentDay < userDay) {
      currentMonth = currentMonth - 1;
      currentDay = daysInMonth(userMonth, userYear) + currentDay;
    }

    if (currentMonth < userMonth) {
      currentYear = currentYear - 1;
      currentMonth = currentMonth + 12;
    }

    resultDay = currentDay - userDay;
    resultMonth = currentMonth - userMonth;
    resultYear = currentYear - userYear;

    console.log(resultDay + "day", resultMonth + "month", resultYear + "year");

    variables.year.textContent = resultYear;
    variables.month.textContent = resultMonth;
    variables.day.textContent = resultDay;

    // showErrorInput();

    inputValidation(
      variables.dayInput.value,
      variables.yearInput.value,
      variables.monthInput.value,
      currentYear
    );
  });
})();

const displayError = () => {
  variables.year.textContent = "--";
  variables.month.textContent = "--";
  variables.day.textContent = "--";
};

const errorEmptyField = () => {
  const errorDay = document.querySelector(".error.day");
  const errorMonth = document.querySelector(".error.month");
  const errorYear = document.querySelector(".error.year");

  errorDay.textContent = "This field is required";
  errorMonth.textContent = "This field is required";
  errorYear.textContent = "This field is required";

  displayError();
};

const clearErrorMsgDay = (input) => {
  const errorDay = document.querySelector(`.error.${input}`);

  errorDay.textContent = "";
};

const removeErrorColors = () => {
  const label = document.querySelectorAll("label");
  const input = document.querySelectorAll("input");

  label.forEach((item) => {
    item.style.color = "hsl(0, 1%, 44%)";
  });

  input.forEach((item) => {
    item.style.borderColor = "hsl(0, 0%, 86%)";
  });
};

const showErrorInput = () => {
  const label = document.querySelectorAll("label");
  const input = document.querySelectorAll("input");

  label.forEach((item) => {
    item.style.color = "hsl(0, 100%, 67%)";
  });

  input.forEach((item) => {
    item.style.borderColor = "hsl(0, 100%, 67%)";
  });
};

const errorDayField = () => {
  const errorDay = document.querySelector(".error.day");
  errorDay.textContent = "Must be a valid day";

  displayError();
};

const errorMonthField = () => {
  const errorMonth = document.querySelector(".error.month");
  errorMonth.textContent = "Must be a valid month";
  displayError();
};

const errorYearField = () => {
  const errorYear = document.querySelector(".error.year");
  errorYear.textContent = "Must be current or past year";
  displayError();
};
