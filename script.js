var divContainer = document.createElement('div');
var divWrapper = document.createElement('div');
var divPasswordGenerated = document.createElement('div'); // sacar o no el div del nombre de la variable
var inputPassword = document.createElement('input');
var btnCopy = document.createElement('button');
var btnReset = document.createElement('button');
var form = document.createElement('form');
var fieldsetLength = document.createElement('fieldset');
var fieldsetRules = document.createElement('fieldset');
var divPaswordProperty = document.createElement('div');
divPasswordGenerated.appendChild(inputPassword);
inputPassword.appendChild(btnCopy);
inputPassword.appendChild(btnReset);
//Clases
divContainer.classList.add('container');
divWrapper.classList.add('box-wrapper');
divPasswordGenerated.classList.add('box', 'box-bg', 'box-psw');
divPaswordProperty.classList.add('box', 'box-bg', 'box-property'); //no me convence el style del nombre de la clase
inputPassword.classList.add('control-style');
divWrapper.appendChild(divPasswordGenerated);
divWrapper.appendChild(divPaswordProperty);
divPaswordProperty.appendChild(form);
form.appendChild(fieldsetLength);
form.appendChild(fieldsetRules);
divContainer.appendChild(divWrapper);
document.body.appendChild(divContainer);
var charLength = [12, 9, 6];
for (var _i = 0, charLength_1 = charLength; _i < charLength_1.length; _i++) {
    var elem = charLength_1[_i];
    var divLengths = document.createElement('div');
    var input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('value', 'elem');
    input.setAttribute('name', 'lenght');
    divLengths.appendChild(input);
    fieldsetLength.appendChild(divLengths);
    var label = document.createElement('label');
    var textLabel = document.createTextNode("".concat(elem, " caracteres"));
    label.appendChild(textLabel);
    divLengths.appendChild(label);
}
var optionRules = ["Solo letras", "Lectura simple", "Todos los caracteres"];
for (var _a = 0, optionRules_1 = optionRules; _a < optionRules_1.length; _a++) {
    var elem = optionRules_1[_a];
    var divRules = document.createElement('div');
    var input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('value', 'elem');
    input.setAttribute('name', 'option');
    divRules.appendChild(input);
    fieldsetRules.appendChild(divRules);
    var label = document.createElement('label');
    var textLabel = document.createTextNode("".concat(elem));
    label.appendChild(textLabel);
    divRules.appendChild(label);
}
