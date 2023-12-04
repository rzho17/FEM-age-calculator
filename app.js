const variables = (() => {
  const year = document.querySelector(".yearNum");
  const month = document.querySelector(".monthNum");
  const day = document.querySelector(".dayNum");

  const dayInput = document.querySelector("#day");
  const monthInput = document.querySelector("#month");
  const yearInput = document.querySelector("#year");

  const form = document.querySelector("form");
  const submit = document.querySelector(".submit");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(dayInput.value);
    console.log(monthInput.value);
    console.log(yearInput.value);
  });
})();
