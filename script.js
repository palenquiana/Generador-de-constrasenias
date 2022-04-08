var divContainer = document.createElement('div');
var divWrapper = document.createElement('div');
var divPasswordGenerated = document.createElement('div'); // sacar o no el div del nombre de la variable
var inputPassword = document.createElement('input');
var btnCopy = document.createElement('button');
var btnReset = document.createElement('button');
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
divContainer.appendChild(divWrapper);
document.body.appendChild(divContainer);
var charLength = [12, 9, 6];
var optionRules = ["Solo letras", "Lectura simple", "Todos los caracteres"];
var charType = ["Mayusculas", "Minusculas", "Numeros", "Simbolos"];
var createFieldset = function (array, name, type) {
    var form = document.createElement('form');
    divPaswordProperty.appendChild(form);
    var fieldset = document.createElement('fieldset');
    form.appendChild(fieldset);
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var elem = array_1[_i];
        var div = document.createElement('div');
        var input = document.createElement('input');
        input.setAttribute('type', type);
        input.setAttribute('value', 'elem');
        input.setAttribute('name', name);
        div.appendChild(input);
        fieldset.appendChild(div);
        var label = document.createElement('label');
        var textLabel = document.createTextNode("".concat(elem));
        label.appendChild(textLabel);
        div.appendChild(label);
    }
};
createFieldset(charLength, 'length', 'radio');
createFieldset(optionRules, 'option', 'radio');
createFieldset(charType, 'charType', 'checkbox');
