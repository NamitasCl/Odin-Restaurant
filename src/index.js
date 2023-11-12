import './style.css'
import header from './cabecera.js'
import portada from './portada.js'
import menu from './menu.js'
import about from './about.js'
import funciona from './prueba.js';
import contact from './contact.js'


let a = funciona();
let b = header();
let c = portada();
let d = menu();
let e = about();

let container = document.createElement('div');
container.id = 'container';
container.append(b);
container.append(c);
document.body.append(container);

let li = document.querySelectorAll('ul li');

li[0].addEventListener('click', ()=>{
    render(menu());
});
li[1].addEventListener('click', ()=>{
    render(about());
});
li[2].addEventListener('click', ()=>{
    render(contact());
});

let logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
    render(portada());
})



function render(htmlElem) {
    if(container.childNodes[1]) container.removeChild(container.childNodes[1]);
    container.append(htmlElem);
}


