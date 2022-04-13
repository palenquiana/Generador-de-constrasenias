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
    long: null,
    rule: null,
    char: []
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
            switch(name) {
                case 'length': finalValues.long = input.value; break;
                case 'option': finalValues.rule = input.value; break;
                case 'charType': btnToggle(finalValues.char.push(input.value)); break;
            }
            console.log(finalValues.long, finalValues.char, finalValues.rule)

            // generarContrasenia()

        })   
    }


    // const generarContrasenia = (finalValues) => {
    //     const password = [];
    //     for (let i in finalValues.long) {

    //     }
    // }

    const btnToggle = (e) => {
        e.classList.toggle('false');
    }

// const generarContrasenia = () => {
//     const rules = document.querySelectorAll('input[name="rules"');


//     for(const rule of rules) {

//     }
}


/* Agregar atributo para que reconozca el nombre con el checkbox */

createFieldset(charLength, 'length', 'radio', 'Longitud');
createFieldset(optionRules, 'option', 'radio', 'Reglas');
createFieldset(charType, 'charType', 'checkbox','Caracteres');





// const arrayCharCode = (min, max) => {
// const array = [];
// for (let i = min; i <= max; i++) {
//     array.push(i);
// }
// return array;
// }

// const charUppercase = arrayCharCode(65, 90);
// const charLowercase = arrayCharCode(97, 122);
// const charNumbercase = arrayCharCode(48, 57);
// const charSymbolcase = arrayCharCode(33, 47).concat(arrayCharCode(58, 64)).concat(arrayCharCode(91, 96)).concat(arrayCharCode(123, 126));

// Para usar con fromCharCode










