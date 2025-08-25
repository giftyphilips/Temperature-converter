// Temperature Converter Application
// Converts between Celsius, Fahrenheit, and Kelvin

// Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Convert Celsius to Kelvin
function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

// Convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Convert Fahrenheit to Kelvin
function fahrenheitToKelvin(fahrenheit) {
  return (fahrenheit - 32) * 5/9 + 273.15;
}

// Convert Kelvin to Celsius
function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

// Convert Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
  return (kelvin - 273.15) * 9/5 + 32;
}