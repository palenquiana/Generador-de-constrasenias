var divContainer = document.createElement('div');
var divWrapper = document.createElement('div');
var divPasswordGenerated = document.createElement('div'); // sacar o no el div del nombre de la variable
var inputPassword = document.createElement('input');
var btnCopy = document.createElement('button');
var btnReset = document.createElement('button');
var divPaswordProperty = document.createElement('div'); //cambiar nombre a uno que especifque es es el div del formulario
var divForm = document.createElement('div');
var formTitle = document.createElement('h2');
var formText = document.createTextNode("Personalice su contraseña");
var pageTitle = document.createElement('h1');
var pageText = document.createTextNode("Generador de contraseñas");
divPasswordGenerated.appendChild(inputPassword);
inputPassword.appendChild(btnCopy);
inputPassword.appendChild(btnReset);
formTitle.appendChild(formText);
divPaswordProperty.appendChild(formTitle);
divPaswordProperty.appendChild(divForm);
pageTitle.appendChild(pageText);
divContainer.appendChild(pageTitle);
//Clases
divContainer.classList.add('container');
divWrapper.classList.add('box-wrapper');
divPasswordGenerated.classList.add('box', 'box-bg', 'box-psw');
divPaswordProperty.classList.add('box', 'box-bg', 'box-property'); //no me convence el style del nombre de la clase
inputPassword.classList.add('control-style');
divForm.classList.add('box-form');
pageTitle.classList.add('page-title');
divWrapper.appendChild(divPasswordGenerated);
divWrapper.appendChild(divPaswordProperty);
divContainer.appendChild(divWrapper);
document.body.appendChild(divContainer);
var charLength = [12, 9, 6];
var optionRules = ["Solo letras", "Lectura simple", "Todos los caracteres"];
var charType = ["Mayusculas", "Minusculas", "Numeros", "Simbolos"];
var createFieldset = function (array, name, type, title) {
    var form = document.createElement('form');
    divForm.appendChild(form);
    var fieldset = document.createElement('fieldset');
    form.appendChild(fieldset);
    var fieldsetTitle = document.createElement('h3');
    var textTitle = document.createTextNode(title);
    fieldsetTitle.appendChild(textTitle);
    fieldset.appendChild(fieldsetTitle);
    var contador = 0;
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
        var textLabel = void 0;
        if (name === 'length') {
            textLabel = document.createTextNode("".concat(elem, " caracteres"));
        }
        else {
            textLabel = document.createTextNode("".concat(elem));
        }
        label.appendChild(textLabel);
        div.appendChild(label);
        if (contador === 0) {
            input.setAttribute('checked', 'true');
        }
        contador++;
    }
};
createFieldset(charLength, 'length', 'radio', 'Longitud');
createFieldset(optionRules, 'option', 'radio', 'Reglas');
createFieldset(charType, 'charType', 'checkbox', 'Caracteres');
