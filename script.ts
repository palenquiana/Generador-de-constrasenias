const divContainer = document.createElement('div');
const divWrapper = document.createElement('div');
const divPasswordGenerated = document.createElement('div');
const inputPassword = document.createElement('input');
const btnCopy = document.createElement('button');
const btnReset = document.createElement('button');
const divPaswordProperty = document.createElement('div'); 
const divForm =document.createElement('div');
const formTitle = document.createElement('h2');
const formText = document.createTextNode("Personalice su contraseña");
const pageTitle = document.createElement('h1');
const pageText = document.createTextNode("Generador de contraseñas");
const imgCopy = document.createElement('img');
const imgReset = document.createElement('img');
imgCopy.setAttribute('src','./assets/outline_content_copy_black_24dp.png');
imgReset.setAttribute('src', './assets/outline_restart_alt_black_24dp.png');
inputPassword.setAttribute('type','text');
inputPassword.setAttribute('size','20');


divPasswordGenerated.appendChild(inputPassword);
divPasswordGenerated.appendChild(btnCopy); //revisar, no pude poner los btn con los iconos dentro del input password, solo aparecen si hago un appenchild con el divpassword
divPasswordGenerated.appendChild(btnReset);

btnCopy.appendChild(imgCopy);
btnReset.appendChild(imgReset);
formTitle.appendChild(formText);
divPaswordProperty.appendChild(formTitle);
divPaswordProperty.appendChild(divForm);
pageTitle.appendChild(pageText);
divContainer.appendChild(pageTitle);



//Clases
divContainer.classList.add('container');
divWrapper.classList.add('box-wrapper');
divPasswordGenerated.classList.add('box', 'box-bg', 'box-psw');
divPaswordProperty.classList.add('box', 'box-bg', 'box-property'); 
inputPassword.classList.add('control-style');
divForm.classList.add('box-form');
pageTitle.classList.add('page-title');
btnCopy.classList.add('btn');
btnReset.classList.add('btn');


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
        label.setAttribute('for', elem);
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

