const date = new Date();
function compute() {
  if (parseInt(principle.value) <= 0) {
    alert("Enter a positive number");
    principle.focus();
    return;
  }
  result =
    (parseInt(rate.value) * parseInt(years.value) * parseInt(principle.value)) /
    100;
  returnYear = date.getFullYear() + parseInt(years.value);
  resultText.innerText = `if you deposit ${principle.value} at a interest rate of ${rate.value}%, you will receive an amount of ${result} in the year ${returnYear}`;
}

rate.addEventListener("input", () => {
  rateValue.innerText = rate.value + "%";
});
rateValue.addEventListener("input", () => {
  rate.value = parseInt(rateValue.innerText);
});
