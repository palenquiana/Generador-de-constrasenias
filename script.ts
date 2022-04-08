const divContainer = document.createElement('div');
const divWrapper = document.createElement('div');
const divPasswordGenerated = document.createElement('div'); // sacar o no el div del nombre de la variable
const inputPassword = document.createElement('input');
const btnCopy = document.createElement('button');
const btnReset = document.createElement('button');

const divPaswordProperty = document.createElement('div');


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

const charLength = [12, 9, 6];
const optionRules = ["Solo letras", "Lectura simple", "Todos los caracteres"];
const charType = ["Mayusculas", "Minusculas", "Numeros", "Simbolos"];

const createFieldset = (array, name, type) => {
    const form = document.createElement('form');
    divPaswordProperty.appendChild(form);
    const fieldset = document.createElement('fieldset');
    form.appendChild(fieldset);

    for (const elem of array) {
        const div = document.createElement('div');
        const input = document.createElement('input');
        input.setAttribute('type', type);
        input.setAttribute('value', 'elem');
        input.setAttribute('name', name);
        div.appendChild(input);
        fieldset.appendChild(div);
        const label = document.createElement('label');
        const textLabel = document.createTextNode(`${elem}`);
        label.appendChild(textLabel);
        div.appendChild(label);
    }
}

createFieldset(charLength, 'length', 'radio');
createFieldset(optionRules, 'option', 'radio');
createFieldset(charType, 'charType', 'checkbox');
