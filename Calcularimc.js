
const imcForm = document.getElementById('imc-form');
const resultDiv = document.getElementById('result');


imcForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  
  const bmi = weight / (height * height);

  
  resultDiv.innerHTML = `Tu IMC es: ${bmi.toFixed(2)}`;

  
  if (bmi < 18.5) {
    resultDiv.innerHTML += "<br>Bajo peso";
  } else if (bmi < 24.9) {
    resultDiv.innerHTML += "<br>Peso normal";
  } else if (bmi < 29.9) {
    resultDiv.innerHTML += "<br>Sobrepeso";
  } else {
    resultDiv.innerHTML += "<br>Obesidad";
  }
});