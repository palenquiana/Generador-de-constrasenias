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

const finalValues = {
    caracteres,
    long: null,
    rule: null,
    char: []
}

var caracteres = {
    numeros: '0123456789',
    simbolos: '!@#$%^&*()',
    mayusculas: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    minusculas: 'abcdefghijklmnopqrstuvwxyz'
}


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

    for (let i = 0; i < array.length; i++) {
        const elem = array[i];
        const div = document.createElement('div');
        const input = document.createElement('input');
        input.setAttribute('type', type);
        input.setAttribute('id', elem);
        input.setAttribute('value', elem);
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
        
        if (i === 0) {
            input.setAttribute('checked','true'); 
        }

        input.addEventListener('change', (e) => {
            e.preventDefault();

            if (input.value === "Solo letras") {
                document.getElementById('Simbolos').setAttribute('disabled', 'true');
                document.getElementById('Numeros').setAttribute('disabled', 'true');
            } else if (input.value === "Lectura simple") {
                document.getElementById('Simbolos').setAttribute('disabled', 'true');
            }

            switch(name) {
                case 'length': finalValues.long = input.value; break;
                case 'option': finalValues.rule = input.value; break;
                case 'charType': finalValues.char.push(input.value); break;
            }

            const passwordFinal = generarContrasenia(finalValues);
            inputPassword.value = passwordFinal;
        })  
    }


    const generarContrasenia = (finalValues) => {
        let caracteresFinales = "";
        let passwordFinal = [];
        for (let value of finalValues.char) {
            switch (value) {
                case 'Mayusculas': caracteresFinales += caracteres.mayusculas; break;
                case 'Minusculas': caracteresFinales += caracteres.minusculas; break;
                case 'Numeros': caracteresFinales += caracteres.numeros; break;
                case 'Simbolos': caracteresFinales += caracteres.simbolos; break;
            }
        }

            for (let i = 0; i < finalValues.long; i++) {
                passwordFinal.push(caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)]);
               }
               return passwordFinal.join('');
        }
        
    }

    // btnReset.addEventListener('click', () => {
    //     let input = document.getElementsByTagName('input');
    //     input.setAttribute()
    // })



/* Agregar atributo para que reconozca el nombre con el checkbox */

createFieldset(charLength, 'length', 'radio', 'Longitud');
createFieldset(optionRules, 'option', 'radio', 'Reglas');
createFieldset(charType, 'charType', 'checkbox','Caracteres');

