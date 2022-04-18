var divContainer = document.createElement("div");
var divWrapper = document.createElement("div");
var divPasswordGenerated = document.createElement("div");
var formPsw = document.createElement("form");
var inputPassword = document.createElement("input");
var btnCopy = document.createElement("button");
var btnReset = document.createElement("button");
var divPasswordProperty = document.createElement("div");
var divForm = document.createElement("div");
var formTitle = document.createElement("h2");
var formText = document.createTextNode("Personalice su contraseña");
var pageTitle = document.createElement("h1");
var pageText = document.createTextNode("Generador de contraseñas");
var imgCopy = document.createElement("img");
var imgReset = document.createElement("img");
imgCopy.setAttribute("src", "./assets/outline_content_copy_black_24dp.png");
imgReset.setAttribute("src", "./assets/outline_restart_alt_black_24dp.png");
imgCopy.setAttribute("alt", "logo copypaste");
imgReset.setAttribute("alt", "logo reiniciar");
inputPassword.setAttribute("type", "text");
inputPassword.setAttribute("size", "12");
btnCopy.setAttribute("type", "submit");
btnCopy.setAttribute("value", " ");
btnReset.setAttribute("value", " ");
btnReset.setAttribute("type", "button"); //vvv
btnCopy.appendChild(imgCopy);
btnReset.appendChild(imgReset);
formPsw.appendChild(inputPassword);
formPsw.appendChild(btnCopy);
formPsw.appendChild(btnReset);
divPasswordGenerated.appendChild(formPsw);
formTitle.appendChild(formText);
divPasswordProperty.appendChild(formTitle);
divPasswordProperty.appendChild(divForm);
pageTitle.appendChild(pageText);
divContainer.appendChild(pageTitle);
//Clases
divContainer.classList.add("container");
divWrapper.classList.add("box-wrapper");
divPasswordGenerated.classList.add("box", "box-bg", "box-psw");
divPasswordProperty.classList.add("box", "box-bg", "box-property");
inputPassword.classList.add("control-style");
divForm.classList.add("box-form");
pageTitle.classList.add("page-title");
btnCopy.classList.add("btn");
btnReset.classList.add("btn");
divWrapper.appendChild(divPasswordGenerated);
divWrapper.appendChild(divPasswordProperty);
divContainer.appendChild(divWrapper);
document.body.appendChild(divContainer);
var finalValues = {
    caracteres: caracteres,
    long: null,
    rule: null,
    char: []
};
var caracteres = {
    numeros: "0123456789",
    simbolos: "!@#$%^&*()",
    mayusculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    minusculas: "abcdefghijklmnopqrstuvwxyz"
};
var charLength = [12, 9, 6];
var optionRules = ["Solo letras", "Lectura simple", "Todos los caracteres"];
var charType = ["Mayusculas", "Minusculas", "Numeros", "Simbolos"];
var createFieldset = function (array, name, type, title) {
    var form = document.createElement("form");
    divForm.appendChild(form);
    var fieldset = document.createElement("fieldset");
    form.appendChild(fieldset);
    var fieldsetTitle = document.createElement("h3");
    var textTitle = document.createTextNode(title);
    fieldsetTitle.appendChild(textTitle);
    fieldset.appendChild(fieldsetTitle);
    for (var i = 0; i < array.length; i++) {
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
        label.setAttribute('for', elem);
        var textLabel = void 0;
        if (name === 'length') {
            textLabel = document.createTextNode("".concat(elem, " caracteres"));
        }
        else {
            textLabel = document.createTextNode("".concat(elem));
        }
        label.appendChild(textLabel);
        div.appendChild(label);
        input.addEventListener('change', function (e) {
            e.preventDefault();
            var target = e.target;
            if (target.value === "Solo letras") {
                document.getElementById('Simbolos').removeAttribute('checked');
                document.getElementById('Numeros').removeAttribute('checked');
                document.getElementById('Simbolos').setAttribute('disabled', 'true');
                document.getElementById('Numeros').setAttribute('disabled', 'true');
            }
            else if (target.value === "Lectura simple") {
                document.getElementById('Simbolos').removeAttribute('checked');
                document.getElementById('Simbolos').setAttribute('disabled', 'true');
                document.getElementById('Numeros').removeAttribute('disabled');
            }
            else if (target.value === "Todos los caracteres") {
                document.getElementById('Numeros').removeAttribute('disabled');
                document.getElementById('Simbolos').removeAttribute('disabled');
            }
            switch (name) {
                case 'length':
                    finalValues.long = target.value;
                    break;
                case 'option':
                    finalValues.rule = target.value;
                    break;
                case 'charType':
                    if (target.checked) {
                        finalValues.char.push(target.value);
                    }
                    else {
                        var index = finalValues.char.indexOf(target.value);
                        finalValues.char.splice(index, 1);
                    }
                    ;
                    break;
            }
            var passwordFinal = generarContrasenia(finalValues);
            inputPassword.value = passwordFinal;
        });
    }
};
var generarContrasenia = function (finalValues) {
    var caracteresFinales = "";
    var passwordFinal = [];
    for (var _i = 0, _a = finalValues.char; _i < _a.length; _i++) {
        var value = _a[_i];
        switch (value) {
            case "Mayusculas":
                caracteresFinales += caracteres.mayusculas;
                break;
            case "Minusculas":
                caracteresFinales += caracteres.minusculas;
                break;
            case "Numeros":
                caracteresFinales += caracteres.numeros;
                break;
            case "Simbolos":
                caracteresFinales += caracteres.simbolos;
                break;
        }
    }
    for (var i = 0; i < finalValues.long; i++) {
        passwordFinal.push(caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)]);
    }
    return passwordFinal.join("");
};
createFieldset(charLength, "length", "radio", "Longitud");
createFieldset(optionRules, "option", "radio", "Reglas");
createFieldset(charType, "charType", "checkbox", "Caracteres");
formPsw.addEventListener('submit', function (e) {
    e.preventDefault();
    navigator.clipboard.writeText(inputPassword.value);
    alert("¡Copiado!");
});
btnReset.addEventListener('click', function (e) {
    var passwordFinal = generarContrasenia(finalValues);
    inputPassword.value = passwordFinal;
});
