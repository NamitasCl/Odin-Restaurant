/* SECCION CONTENIDO PORTADA */
import burger from '../assets/img/burger.png'


export default function portada() {
    
    const seccionContenido = document.createElement('section');
    const divPortada = document.createElement('div');
    const divIzquierda = document.createElement('div');
    const divTitulo = document.createElement('div');
    const paraFirst = document.createElement('p');
    const paraSecond = document.createElement('p');
    const separador = document.createElement('div');
    const divFinal = document.createElement('div');
    const finalH3 = document.createElement('h3');
    const finalPara = document.createElement('p');
    const finalBtn = document.createElement('button');
    const divDerecha = document.createElement('div');
    const imgDerecha = document.createElement('img');
    const divPremStamp = document.createElement('div');
    const divPremStH1 = document.createElement('h1');

    divTitulo.classList = 'titulo';
    paraFirst.innerText = 'THE BEST';
    paraSecond.innerText = 'BURGER';

    divTitulo.append(paraFirst, paraSecond);

    separador.classList = 'separador';

    divFinal.classList = 'final';
    finalH3.innerText = 'SPECIAL INGREDIENTS';
    finalPara.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, reprehenderit commodi iusto eaque aperiam possimus, officia praesentium quae veritatis sunt natus expedita deleniti a, quam corrupti sit assumenda nulla sequi?';
    finalBtn.innerText = 'READ MORE';
    
    divFinal.append(finalH3, finalPara, finalBtn);

    divDerecha.classList = 'derecha';
    imgDerecha.src = burger;
    divPremStamp.classList = 'premium-stamp';
    divPremStH1.innerText = '100% Premium';

    divPremStamp.append(divPremStH1);
    divDerecha.append(imgDerecha, divPremStamp);

    divIzquierda.append(divTitulo, separador, divFinal);
    divIzquierda.classList = 'izquierda';

    divPortada.append(divIzquierda, divDerecha);
    divPortada.classList = 'portada';

    seccionContenido.append(divPortada);
    seccionContenido.id = 'contenido';

    return seccionContenido;
}