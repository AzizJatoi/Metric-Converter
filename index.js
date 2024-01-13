let meterFeetBody = document.getElementById("meter-feet-body");
let literGallonBody = document.getElementById("liter-gallon-body");
let poundKiloBody = document.getElementById("pound-kilo-body");
let inputField = document.getElementById("input-field");
const convertButton = document.getElementById("convert-button");

convertButton.addEventListener("click", function() {
    let inputValue = parseFloat(inputField.value);

    if (isNaN(inputValue)) {
        alert("Please enter a valid number");
        return;
    }

    let resultInFeet = inputValue * 3.281;
    let resultInMeters = inputValue / 3.281;
    
    meterFeetBody.innerHTML = `${inputValue} meters = ${resultInFeet.toFixed(3)} feet | ${inputValue} feet = ${resultInMeters.toFixed(3)} meters`;

    let resultInLiter = inputValue *  0.264  
    let resultInGallon = inputValue /  0.264  
    literGallonBody.innerHTML = `${inputValue} liters = ${resultInLiter.toFixed(3)} gallons | ${inputValue} gallons = ${resultInGallon.toFixed(3)} liters`;

    let resultInPounds = inputValue *  2.204 
    let resultInKilos = inputValue /  2.204 
    poundKiloBody.innerHTML = `${inputValue} kilos = ${resultInPounds.toFixed(3)} pounds | ${inputValue} pounds = ${resultInKilos.toFixed(3)} kilos`;

});
