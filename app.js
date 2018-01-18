// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  // Hide results
  document.getElementById('results').style.display = 'none';
  // Show 
document.getElementById('loading').style.display = 'block';

setTimeout(calculateResults, 1000);


  e.preventDefault();
});

// Calculate Results function
function calculateResults(){
  // Show Clear Button
  document.querySelector('.clearFields').style.display = 'block';
  
  // UI Vars
  const amount =  document.getElementById('amount');
  const interst = document.getElementById('interst');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');
  
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

// Compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)){
  monthlyPayment.value = monthly.toFixed(2);
  totalPayment.value = (monthly * calculatedPayments).toFixed(2);
  totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
// Show Results
  document.getElementById('results').style.display = 'block';
// Hide Loader
  document.getElementById('loading').style.display = 'none';
  }else {
    showError('Please check your numbers')
  };

  

// Show Error
function showError(error) {
 // Show Clear Button
 document.querySelector('.clearFields').style.display = 'none';

  // Hide Results
  document.getElementById('results').style.display = 'none';
  
  // Hide Loader
  document.getElementById('loading').style.display = 'none';

  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add  class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

// Insert error above heading
card.insertBefore(errorDiv, heading);

// Clear Error 3 seconds
setTimeout(clearError, 2000);
}

// Clear Error Function
function clearError() {
  document.querySelector('.alert').remove();
}

}


  document.querySelector('#clearAllFields').addEventListener('click', function() {
    document.getElementById('results').reset();
    document.querySelector('#clearAllFields').style.display = 'none';

    setTimeout(removeResults, 500);
    function removeResults(){
      document.getElementById('results').remove();
    }
  });