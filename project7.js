document.getElementById("mortgage-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get input values
    const amount = parseFloat(document.getElementById("amount").value);
    const term = parseFloat(document.getElementById("term").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const type = document.querySelector('input[name="type"]:checked').value;
    
    // Calculate repayment based on mortgage type
    let monthlyRepayment;
    if (type === "repayment") {
        const monthlyRate = rate / 100 / 12;
        const numberOfPayments = term * 12;
        monthlyRepayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    } else {
        monthlyRepayment = (amount * (rate / 100)) / 12;
    }
    
    // Display the results
    const resultContainer = document.querySelector(".result-info p");
    resultContainer.textContent = `Your monthly repayment is £${monthlyRepayment.toFixed(2)}`;
});
