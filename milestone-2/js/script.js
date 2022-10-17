/**MILESTONE 2**
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.*/

console.log(`ciaooooo`);

const images = [
  `01.jpg`, `02.jpg`, `03.jpg`, `04.jpg`, `05.jpg`
];


//contenitore
const objectWrapper = document.querySelector(`.objects-wrapper`);

let imageTags = ``;
//ciclare array

for(let i = 0; i < images.length; i++){
  imageTags += `
  <img class="object" src="img/${images[i]}" alt="${images[i]}" class="object">
  `;
}

console.log(objectWrapper);

let counterImages = 0;


// bottoni
const next = document.querySelector(`.bottom`);
const previous = document.querySelector(`.top`);
previous.classList.add("hide")

//image tags

objectWrapper.innerHTML += imageTags;

const objects = document.getElementsByClassName(`object`)

objects[counterImages].classList.add(`active`);

//click cambiamento img

next.addEventListener("click" , function(){
  objects[counterImages].classList.remove(`active`);
  objects[++counterImages].classList.add(`active`);

  previous.classList.remove(`hide`);
  if(counterImages === images.lenght -1){
    next.classList.add(`hide`)
  }

});

previous.addEventListener("click" , function(){
  objects[counterImages].classList.remove(`active`);
  objects[--counterImages].classList.add(`active`);

  next.classList.remove(`hide`);
  if(counterImages === images.lenght -1){
    next.classList.add(`hide`)
  }

});

console.log(objects);

