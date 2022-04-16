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
divPasswordGenerated.appendChild(btnCopy);
divPasswordGenerated.appendChild(btnReset);
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
var finalValues = {
    caracteres: caracteres,
    long: null,
    rule: null,
    char: []
};
var caracteres = {
    numeros: '0123456789',
    simbolos: '!@#$%^&*()',
    mayusculas: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    minusculas: 'abcdefghijklmnopqrstuvwxyz'
};
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
    var _loop_1 = function (i) {
        var elem = array[i];
        var div = document.createElement('div');
        var input = document.createElement('input');
        input.setAttribute('type', type);
        input.setAttribute('id', elem);
        input.setAttribute('value', elem);
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
        if (i === 0) {
            input.setAttribute('checked', 'true');
        }
        input.addEventListener('change', function (e) {
            e.preventDefault();
            if (input.value === "Solo letras") {
                document.getElementById('Simbolos').setAttribute('disabled', 'true');
                document.getElementById('Numeros').setAttribute('disabled', 'true');
            }
            else if (input.value === "Lectura simple") {
                document.getElementById('Simbolos').setAttribute('disabled', 'true');
            }
            switch (name) {
                case 'length':
                    finalValues.long = input.value;
                    break;
                case 'option':
                    finalValues.rule = input.value;
                    break;
                case 'charType':
                    finalValues.char.push(input.value);
                    break;
            }
            var passwordFinal = generarContrasenia(finalValues);
            inputPassword.value = passwordFinal;
        });
    };
    for (var i = 0; i < array.length; i++) {
        _loop_1(i);
    }
    var generarContrasenia = function (finalValues) {
        var caracteresFinales = "";
        var passwordFinal = [];
        for (var _i = 0, _a = finalValues.char; _i < _a.length; _i++) {
            var value = _a[_i];
            switch (value) {
                case 'Mayusculas':
                    caracteresFinales += caracteres.mayusculas;
                    break;
                case 'Minusculas':
                    caracteresFinales += caracteres.minusculas;
                    break;
                case 'Numeros':
                    caracteresFinales += caracteres.numeros;
                    break;
                case 'Simbolos':
                    caracteresFinales += caracteres.simbolos;
                    break;
            }
        }
        for (var i = 0; i < finalValues.long; i++) {
            passwordFinal.push(caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)]);
        }
        return passwordFinal.join('');
    };
};
// btnReset.addEventListener('click', () => {
//     let input = document.getElementsByTagName('input');
//     input.setAttribute()
// })
/* Agregar atributo para que reconozca el nombre con el checkbox */
createFieldset(charLength, 'length', 'radio', 'Longitud');
createFieldset(optionRules, 'option', 'radio', 'Reglas');
createFieldset(charType, 'charType', 'checkbox', 'Caracteres');
