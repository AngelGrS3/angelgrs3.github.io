document.getElementById('calcularIMC').addEventListener('click', function() {
    const peso = parseFloat(document.getElementById('peso').value);
    const estatura = parseFloat(document.getElementById('estatura').value);
    const resultadoDiv = document.getElementById('resultado');

    const imc = peso / (estatura * estatura);
    let mensaje = `Tu IMC es: ${imc.toFixed(2)}`;
    let color;

    if (imc < 18.5) {
        color = '#00BFFF';
        mensaje += ' (Bajo peso)';
    } else if (imc > 18.5 && imc < 24.9) {
        color = '#32CD32';
        mensaje += ' (normal)';
    } else if (imc > 25 && imc < 29.9) {
        color = '#FFD700';
        mensaje += ' (Sobrepeso)';
    } else if (imc > 30 && imc < 34.9) {
        color = '#FF8C00';
        mensaje += ' (obesidad 1)';
    }else if (imc > 35 && imc < 39.9) {
        color = '##FF4500';
        mensaje + ' (Obesidad 2)';
    }else {
        color = '#FF4500'; 
        mensaje += ' (Obesidad 3)';
    }

    resultadoDiv.innerHTML = mensaje;
    resultadoDiv.style.color = color;
});
