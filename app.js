const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// In-memory data representation of the Input Tab
let inputData = [
  { borrowerName: "John Doe", current1stMortgageBal: 626417.51, current1stMtgRate: 0.075, principle: 0, interest: 0, taxes: 0, insurance: 0, currentPITI1stMtg: 0, currentPandIorIOPayment: 0, currentMonthlyMI: 0, currentAnnualTaxes: 0, currentAnnualInsurance: 0 },
  // Additional rows can be added here
];

// Route to display form
app.get('/', (req, res) => {
  const currentDate = new Date().toLocaleDateString();
  res.render('index copy', { data: inputData, currentDate });
});

// Route to handle form submission
app.post('/update', (req, res) => {
  const { id, borrowerName, current1stMortgageBal, current1stMtgRate, principle, interest } = req.body;
  // Update in-memory data
  inputData[id] = {
    borrowerName,
    current1stMortgageBal: parseFloat(current1stMortgageBal),
    current1stMtgRate: parseFloat(current1stMtgRate),
    principle: parseFloat(principle),
    interest: parseFloat(interest),
    taxes: inputData[id].taxes, // Keeping calculated fields the same
    insurance: inputData[id].insurance, // Keeping calculated fields the same
    currentPITI1stMtg: inputData[id].currentPITI1stMtg, // Keeping calculated fields the same
    currentPandIorIOPayment: inputData[id].currentPandIorIOPayment, // Keeping calculated fields the same
    currentMonthlyMI: inputData[id].currentMonthlyMI, // Keeping calculated fields the same
    currentAnnualTaxes: inputData[id].currentAnnualTaxes, // Keeping calculated fields the same
    currentAnnualInsurance: inputData[id].currentAnnualInsurance // Keeping calculated fields the same
  };
  res.redirect('/');
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});