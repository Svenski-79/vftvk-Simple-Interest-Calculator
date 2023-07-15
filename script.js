function compute() {
  result =
    parseInt(principle.value) +
    (parseInt(rate.value) * parseInt(years.value)) / 100;
  console.log(result);
}

rate.addEventListener("input", () => {
  rateValue.innerText = rate.value + "%";
});
