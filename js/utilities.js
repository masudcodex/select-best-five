//InputField Value

function inputFieldValue(elementId){
    const inputField = document.getElementById(elementId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;
}