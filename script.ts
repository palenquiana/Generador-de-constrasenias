const divContainer = document.createElement('div');
const divWrapper = document.createElement('div');
const divPasswordGenerated = document.createElement('div'); // sacar o no el div del nombre de la variable
const inputPassword = document.createElement('input');
const btnCopy = document.createElement('button');
const btnReset = document.createElement('button');
const divPaswordProperty = document.createElement('div'); //cambiar nombre a uno que especifque es es el div del formulario
const divForm =document.createElement('div');
const formTitle = document.createElement('h2');
const formText = document.createTextNode("Personalice su contraseña");
const pageTitle = document.createElement('h1');
const pageText = document.createTextNode("Generador de contraseñas");

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

const charLength = [12, 9, 6];
const optionRules = ["Solo letras", "Lectura simple", "Todos los caracteres"];
const charType = ["Mayusculas", "Minusculas", "Numeros", "Simbolos"];

const createFieldset = (array, name, type, title) => {

    const form = document.createElement('form');
    divForm.appendChild(form);
    const fieldset = document.createElement('fieldset');
    form.appendChild(fieldset);
    const fieldsetTitle = document.createElement('h3');
    const textTitle = document.createTextNode(title);
    fieldsetTitle.appendChild(textTitle);
    fieldset.appendChild(fieldsetTitle);

    let contador= 0;

    for (const elem of array) {
        const div = document.createElement('div');
        const input = document.createElement('input');
        input.setAttribute('type', type);
        input.setAttribute('value', 'elem');
        input.setAttribute('name', name);
        div.appendChild(input);
        fieldset.appendChild(div);
        const label = document.createElement('label');
        let textLabel;
        if (name === 'length') {
            textLabel = document.createTextNode(`${elem} caracteres`);
        }
        else{
            textLabel = document.createTextNode(`${elem}`);
        }
        label.appendChild(textLabel);
        div.appendChild(label);
        if (contador === 0) {
            input.setAttribute('checked','true');
        }
        contador++;
  
        
    }
 
    
    


}

createFieldset(charLength, 'length', 'radio', 'Longitud');
createFieldset(optionRules, 'option', 'radio', 'Reglas');
createFieldset(charType, 'charType', 'checkbox','Caracteres');
