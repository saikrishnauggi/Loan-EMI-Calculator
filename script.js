function calculateEMI() {
  const principal = parseFloat(document.getElementById('principal').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const months = parseInt(document.getElementById('months').value);
  const resultDiv = document.getElementById('emiResult');

  if (isNaN(principal) || isNaN(rate) || isNaN(months) || principal <= 0 || rate < 0 || months <= 0) {
    resultDiv.style.display = 'block';
    resultDiv.style.color = 'crimson';
    resultDiv.style.borderLeftColor = 'crimson';
    resultDiv.innerHTML = " Please enter valid positive values in all fields.";
    return;
  }

  const monthlyRate = rate / 100;
  const factor = Math.pow(1 + monthlyRate, months);
  const emi = (principal * monthlyRate * factor) / (factor - 1);
  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;

  resultDiv.style.display = 'block';
  resultDiv.style.color = 'darkgreen';
  resultDiv.style.borderLeftColor = 'darkgreen';
  resultDiv.innerHTML = `
     <strong>EMI:</strong> ₹${emi.toFixed(2)}<br>
     <strong>Total Payment:</strong> ₹${totalPayment.toFixed(2)}<br>
     <strong>Total Interest:</strong> ₹${totalInterest.toFixed(2)}
  `;
}

function resetForm() {
  document.getElementById('principal').value = '';
  document.getElementById('rate').value = '';
  document.getElementById('months').value = '';
  const resultDiv = document.getElementById('emiResult');
  resultDiv.style.display = 'none';
  resultDiv.innerHTML = '';
}
