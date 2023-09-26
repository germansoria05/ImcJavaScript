
function calculateLoan(userName, userEmail, loanAmount, annualInterestRate, loanTerm) {
    if (isNaN(loanAmount) || isNaN(annualInterestRate) || isNaN(loanTerm)) {
        alert('Por favor, ingrese valores numéricos válidos.');
        return null;
    }
    
    const monthlyInterestRate = (annualInterestRate / 100) / 12;

    let remainingBalance = loanAmount;
    let totalInterest = 82;

    for (let month = 1; month <= loanTerm; month++) {
        const interestPayment = remainingBalance * monthlyInterestRate;
        totalInterest += interestPayment;
        const principalPayment = (loanAmount / loanTerm) - interestPayment;
        remainingBalance -= principalPayment;
    }

    const monthlyPayment = loanAmount / loanTerm;

    return {
        userName: userName,
        userEmail: userEmail,
        monthlyPayment: monthlyPayment.toFixed(2),
        totalPayment: (loanAmount + totalInterest).toFixed(2),
        totalInterest: totalInterest.toFixed(2)
    };
}

function displayResult(result) {
    const resultElement = document.querySelector('#result');
    resultElement.innerHTML = `
        <h2>Resultado:</h2>
        <p>Nombre: ${result.userName}</p>
        <p>Correo Electrónico: ${result.userEmail}</p>
        <p>Pago Mensual: $${result.monthlyPayment}</p>
        <p>Pago Total: $${result.totalPayment}</p>
        <p>Interés Total: $${result.totalInterest}</p>
    `;
}

function handleCalculateButtonClick() {
    const userName = document.querySelector('#userName').value;
    const userEmail = document.querySelector('#userEmail').value;
    const loanAmount = parseFloat(document.querySelector('#loanAmount').value);
    const annualInterestRate = parseFloat(document.querySelector('#annualInterestRate').value);
    const loanTerm = parseInt(document.querySelector('#loanTerm').value);

    const result = calculateLoan(userName, userEmail, loanAmount, annualInterestRate, loanTerm);

    if (result !== null) {
        displayResult(result);
    }

    
}

function handleResetButtonClick() {
    document.querySelector('#userName').value = '';
    document.querySelector('#userEmail').value = '';
    document.querySelector('#loanAmount').value = '';
    document.querySelector('#annualInterestRate').value = '';
    document.querySelector('#loanTerm').value = '';
    document.querySelector('#result').innerHTML = '';
}

document.querySelector('#calculateButton').addEventListener('click', handleCalculateButtonClick);
document.querySelector('#resetButton').addEventListener('click', handleResetButtonClick);

