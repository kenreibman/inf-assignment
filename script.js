const hourlyWage = document.querySelector('#hourlyWage');
const hoursPerWeek = document.querySelector('#hoursPerWeek');

const total = document.querySelector('#total');

let hourlyWageValue = 0;
let hoursPerWeekValue = 0;

hourlyWage.addEventListener('input', setHourlyWageValue);
hoursPerWeek.addEventListener('input', setHoursPerWeekValue);

function setHourlyWageValue() {
  hourlyWageValue = parseFloat(hourlyWage.value);
  if (hourlyWageValue <= 0) {
    alert('Hourly wage must be greater than 0');
  }

  calculateTotal();
}

function setHoursPerWeekValue() {
  hoursPerWeekValue = parseFloat(hoursPerWeek.value);

  if (hoursPerWeekValue <= 0) {
    alert('Hours per week must be greater than 0');
  }

  calculateTotal();
}

function calculateTotal() {
  if (hourlyWageValue >= 1) {
    let totalAmount = hourlyWageValue * hoursPerWeekValue * 52;

    total.innerHTML = '$' + parseFloat(totalAmount).toFixed(2);
  }
}
