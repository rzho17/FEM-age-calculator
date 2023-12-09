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

const inputValidation = (day, year, month) => {
  if (day > daysInMonth(month, year) || day === "") {
    console.log("invalid");
  } else {
    console.log("valid");
  }
};

const formSubmit = (() => {
  const form = document.querySelector("form");
  const date = new Date();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(daysInMonth(5, 2023));
    // console.log(variables.dayInput.value);
    // console.log(variables.monthInput.value);
    // console.log(variables.yearInput.value);

    let userDay = parseInt(variables.dayInput.value);
    let userMonth = parseInt(variables.monthInput.value);
    let userYear = parseInt(variables.yearInput.value);

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

    console.log(currentDay);
    console.log(userDay);
    console.log(currentMonth);

    resultDay = currentDay - userDay;
    resultMonth = currentMonth - userMonth;
    resultYear = currentYear - userYear;

    console.log(resultDay + "day", resultMonth + "month", resultYear + "year");

    //to find month
    //if month <= current month and days >= current date
    //ignore the current month and go back one month
    //find the difference between days using current month days

    // console.log(date.getDate());

    // if (date.getMonth() + 1 - month <= month) {
    //   console.log(month);
    // }

    // console.log(date.getMonth());

    // if (date.getMonth() + 1 <= month)

    // if (date.getMonth() + 1 - month <= month && day >= date.getDate()) {
    //   // console.log("hi");
    //   console.log(date.getFullYear() - year - 1 + "year");
    //   console.log(month - date.getMonth() + "month");
    //   console.log(daysInMonth(month, year) - day + date.getDate() + "day");
    // } else {
    //   console.log(date.getFullYear() - year + "year");
    //   console.log(date.getMonth() + 1 - month + "month");
    //   console.log(date.getDate() - day);
    // }

    //to find days remaining
    //
    // console.log(daysInMonth(12, 2023));
    // console.log(daysInMonth(12, 2023) - date.getDate() - 4);
    // console.log(daysInMonth(12, 2023) - parseInt(variables.dayInput.value));

    inputValidation(
      variables.dayInput.value,
      variables.yearInput.value,
      variables.monthInput.value
    );

    variables.year.textContent = variables.yearInput.value;
    variables.month.textContent = variables.monthInput.value;
    variables.day.textContent = variables.dayInput.value;
  });
})();
