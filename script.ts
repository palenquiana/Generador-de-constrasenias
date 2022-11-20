const divContainer = document.createElement("div");
const divWrapper = document.createElement("div");
const divPasswordGenerated = document.createElement("div");
const formPsw = document.createElement("form");
const inputPassword = document.createElement("input");
const btnCopy = document.createElement("button");
const btnReset = document.createElement("button");
const divPasswordProperty = document.createElement("div");
const divForm = document.createElement("div");
const formTitle = document.createElement("h2");
const formText = document.createTextNode("Personalice su contraseña");
const pageTitle = document.createElement("h1");
const pageText = document.createTextNode("Generador de contraseñas");
const imgCopy = document.createElement("img");
const imgReset = document.createElement("img");

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

var caracteres = {
  numeros: "0123456789",
  simbolos: "!@#$%^&*()",
  mayusculas: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  minusculas: "abcdefghijklmnopqrstuvwxyz",
};

const finalValues = {
  caracteres,
  long: null,
  rule: null,
  char: [],
};

const charLength = [12, 9, 6];
const optionRules = ["Solo letras", "Lectura simple", "Todos los caracteres"];
const charType = ["Mayusculas", "Minusculas", "Numeros", "Simbolos"];

const createFieldset = (array: any[], name: string, type: string, title: string) => {
  const form = document.createElement("form");
  divForm.appendChild(form);
  const fieldset = document.createElement("fieldset");
  form.appendChild(fieldset);
  const fieldsetTitle = document.createElement("h3");
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
        


        input.addEventListener('change', (e: Event) => {
            e.preventDefault();
            const target = e.target as HTMLInputElement;
            
            if (target.value === "Solo letras") {
              document.getElementById('Simbolos')?.removeAttribute('checked');
              document.getElementById('Numeros')?.removeAttribute('checked');
                document.getElementById('Simbolos')?.setAttribute('disabled', 'true');
                document.getElementById('Numeros')?.setAttribute('disabled', 'true');
            } else if (target.value === "Lectura simple") {
              document.getElementById('Simbolos')?.removeAttribute('checked');
                document.getElementById('Simbolos')?.setAttribute('disabled', 'true');
                document.getElementById('Numeros')?.removeAttribute('disabled');   
            } else if (target.value === "Todos los caracteres") {
              document.getElementById('Numeros')?.removeAttribute('disabled');
              document.getElementById('Simbolos')?.removeAttribute('disabled');
            }

            switch(name) {
                case 'length': finalValues.long = target.value; break;
                case 'option': finalValues.rule = target.value; break;
                case 'charType': if (target.checked) {finalValues.char.push(target.value)
                    } else {
                            let index = finalValues.char.indexOf(target.value);
                            finalValues.char.splice(index, 1)}; break;
                           }

    
            const passwordFinal = generarContrasenia(finalValues);
            inputPassword.value = passwordFinal;
        })  
    }
};

const generarContrasenia = (finalValues) => {
    
  let caracteresFinales = "";
  let passwordFinal = [];
  for (let value of finalValues.char) {
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
  for (let i = 0; i < finalValues.long; i++) {
    passwordFinal.push(
      caracteresFinales[Math.floor(Math.random() * caracteresFinales.length)]
    );
  }


  return passwordFinal.join("");
};

createFieldset(charLength, "length", "radio", "Longitud");
createFieldset(optionRules, "option", "radio", "Reglas");
createFieldset(charType, "charType", "checkbox", "Caracteres");

formPsw.addEventListener('submit', (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(inputPassword.value);
  alert("¡Copiado!");
  
});
btnReset.addEventListener('click', (e)=>{
  const passwordFinal = generarContrasenia(finalValues);
  inputPassword.value = passwordFinal;
})





