document.getElementById("convertBtn").addEventListener("click", function () {
    const input = document.getElementById("tempInput").value.trim();
    const resultDiv = document.getElementById("result");

    // Validate input
    if (input === "" || isNaN(input)) {
        resultDiv.textContent = "Please enter a valid number!";
        return;
    }

    const temp = parseFloat(input);

    // Get selected unit
    const unit = document.querySelector('input[name="unit"]:checked').value;

    let celsius, fahrenheit, kelvin;

    switch (unit) {
        case "C":
            celsius = temp;
            fahrenheit = (temp * 9 / 5) + 32;
            kelvin = temp + 273.15;
            break;
        case "F":
            celsius = (temp - 32) * 5 / 9;
            fahrenheit = temp;
            kelvin = celsius + 273.15;
            break;
        case "K":
            celsius = temp - 273.15;
            fahrenheit = (celsius * 9 / 5) + 32;
            kelvin = temp;
            break;
    }

    // Display the results
    resultDiv.innerHTML = `
    Celsius: ${celsius.toFixed(2)} °C<br>
    Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
    Kelvin: ${kelvin.toFixed(2)} K
  `;
});
