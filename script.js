const date = new Date();
function compute() {
  result =
    parseInt(principle.value) +
    (parseInt(rate.value) * parseInt(years.value) * parseInt(principle.value)) /
      100;
  returnYear = date.getFullYear() + parseInt(years.value);
  console.log(returnYear);
  resultText.innerText = `if you deposit ${principle.value} at an interest rate of ${rate.value}%, you will receive an amount of ${result} in ${returnYear} years`;
}

rate.addEventListener("input", () => {
  rateValue.innerText = rate.value + "%";
});
rateValue.addEventListener("input", () => {
  rate.value = parseInt(rateValue.innerText);
});
