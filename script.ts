const divContainer = document.createElement('div');
const divWrapper = document.createElement('div');
const divPasswordGenerated = document.createElement('div'); // sacar o no el div del nombre de la variable
const inputPassword = document.createElement('input');
const btnCopy = document.createElement('button');
const btnReset = document.createElement('button');
const form = document.createElement('form');
const fieldsetLength = document.createElement('fieldset');
const fieldsetRules = document.createElement('fieldset');
const divPaswordProperty = document.createElement('div');


divPasswordGenerated.appendChild(inputPassword);
inputPassword.appendChild(btnCopy);
inputPassword.appendChild(btnReset);


//Clases
divContainer.classList.add('container');
divWrapper.classList.add('box-wrapper');
divPasswordGenerated.classList.add('box','box-bg', 'box-psw');
divPaswordProperty.classList.add('box', 'box-bg','box-property'); //no me convence el style del nombre de la clase
inputPassword.classList.add('control-style');

divWrapper.appendChild(divPasswordGenerated);
divWrapper.appendChild(divPaswordProperty);
divPaswordProperty.appendChild(form);
form.appendChild(fieldsetLength);
form.appendChild(fieldsetRules);
divContainer.appendChild(divWrapper);


document.body.appendChild(divContainer);

const charLength = [12,9,6];

for (const elem of charLength) {
    const divLengths = document.createElement('div');
    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('value', 'elem');
    input.setAttribute('name', 'lenght');
    divLengths.appendChild(input);
    fieldsetLength.appendChild(divLengths);
    const label = document.createElement('label');
    const textLabel = document.createTextNode(`${elem} caracteres`);
    label.appendChild(textLabel);
    divLengths.appendChild(label);
    
}

const optionRules = ["Solo letras","Lectura simple", "Todos los caracteres"];

for (const elem of optionRules) {
    const divRules = document.createElement('div');
    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('value', 'elem');
    input.setAttribute('name', 'option');
    divRules.appendChild(input);
    fieldsetRules .appendChild(divRules);
    const label = document.createElement('label');
    const textLabel = document.createTextNode(`${elem}`);
    label.appendChild(textLabel);
    divRules.appendChild(label);
    
}


