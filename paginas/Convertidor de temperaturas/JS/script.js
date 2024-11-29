function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    let celsius, output;

    switch (fromUnit) {
        case 'C':
            celsius = inputTemp;
            break;
        case 'F':
            celsius = (inputTemp - 32) * 5/9;
            break;
        case 'K':
            celsius = inputTemp - 273.15;
            break;
        case 'R':
            celsius = (inputTemp - 491.67) * 5/9;
            break;
        default:
            alert('Unidad de origen no válida');
            return;
    }

    switch (toUnit) {
        case 'C':
            output = `${inputTemp} °C es igual a ${celsius.toFixed(2)} °C`;
            break;
        case 'F':
            output = `${inputTemp} °C es igual a ${(celsius * 9/5 + 32).toFixed(2)} °F`;
            break;
        case 'K':
            output = `${inputTemp} °C es igual a ${(celsius + 273.15).toFixed(2)} K`;
            break;
        case 'R':
            output = `${inputTemp} °C es igual a ${(celsius + 273.15) * 9/5}.toFixed(2)} R`;
            break;
        default:
            alert('Unidad de destino no válida');
            return;
    }

    document.getElementById('output').innerText = output;
}
