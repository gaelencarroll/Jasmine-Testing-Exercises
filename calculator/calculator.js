window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: (document.getElementById("loan-amount").value),
    years: (document.getElementById("loan-years").value),
    rate: (document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const initValues = {
    amount: 5000, 
    years: 10, 
    rate: 1.5
  }
  document.getElementById("loan-amount").value = initValues.amount;
  document.getElementById("loan-years").value =  initValues.years;
  document.getElementById("loan-rate").value = initValues.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly((calculateMonthlyPayment(currentValues)));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  monthlyRate = (values.rate / 100) / 12;
  totalPayments = values.years * 12;
  let monthlyPayment = (
    (values.amount * monthlyRate) 
    / 
    (1 - Math.pow(( 1 + monthlyRate ), -totalPayments ))
    ).toFixed(2)
  return monthlyPayment;
}


// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPay = document.getElementById('monthly-payment')
  monthlyPay.innerText = "$" + (monthly);
}


