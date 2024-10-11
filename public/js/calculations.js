// JavaScript Functions for Calculations
// Filename: public/js/calculations.js
function calculateMonthlyPayment(principal, annualRate, termMonths) {
    const monthlyRate = annualRate / 12;
    return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths));
  }
  
  function updateCalculations() {
    const rows = document.querySelectorAll('.card-body');
    rows.forEach(row => {
      const principal = parseFloat(row.querySelector('input[name="mortgageBalance"]').value);
      const annualRate = parseFloat(row.querySelector('input[name="interestRate"]').value);
      const termMonths = 360; // Example term of 30 years
  
      const monthlyPayment = calculateMonthlyPayment(principal, annualRate, termMonths);
      console.log(`Monthly Payment for ${principal}: ${monthlyPayment.toFixed(2)}`);
    });
  }
  
  document.addEventListener('DOMContentLoaded', updateCalculations);