export default function about() {
    const seccionAbout = document.createElement('section');
    seccionAbout.id = 'about';

    const divPortada = document.createElement('div');
    divPortada.classList = 'portada';

    const divIzquierda = document.createElement('div');
    divIzquierda.classList = 'izquierda';

    const divTitulo = document.createElement('div');
    const paraFirst = document.createElement('p');
    const paraSecond = document.createElement('p');
    const separador = document.createElement('div');
    const divFinal = document.createElement('div');
    const finalH3 = document.createElement('h3');

    divTitulo.classList = 'titulo';
    paraFirst.innerText = 'THE BEST';
    paraSecond.innerText = 'BURGER';

    divTitulo.append(paraFirst, paraSecond);

    separador.classList = 'separador';

    divFinal.classList = 'final';
    finalH3.innerText = 'MENU';
    
    divFinal.append(finalH3);

    divIzquierda.append(divTitulo, separador, divFinal);

    /* DERECHA */
    const divDerecha = document.createElement('div');
    const divAboutCont = document.createElement('div');

    const aboutTitle = document.createElement('h1');
    aboutTitle.innerText = 'Our Story: The Passion for Burgers';

    let aboutParas = ['In the heart of the city, a small group of friends shared a common passion: burgers. Every weekend, they gathered in the backyard of a house to experiment with ingredients, sauces, and grilling techniques. Their love for burgers grew with each delicious creation they served to friends and family. The satisfaction they felt seeing smiles on the faces of those who tasted their burgers made them realize they were destined for something bigger.',
    'This is how "BurgerMania," our burger joint, was born. We strive to bring the same passion and creativity we had in that backyard to every burger we serve. Each recipe has been carefully developed and tested to provide an unforgettable flavor experience. We work with the finest ingredients, from 100% premium beef to freshly baked buns, and each burger is cooked to perfection on our grills.',
    'At BurgerMania, we believe in the importance of quality and taste, but also in diversity. Our menu offers options for every taste, from classic and vegetarian burgers to gourmet creations that will surprise you. We pair our burgers with delicious sides, homemade sauces, and refreshing beverages.',
    'But it\'s not just about the food. Our burger joint has become a gathering place for friends and families, where special memories are created. Our team is committed to providing friendly service and a welcoming atmosphere so that every visit is a memorable experience.',
    'At BurgerMania, the passion for burgers is what drives us to excel every day. We are grateful for the opportunity to share our passion with you, and we hope you enjoy every bite as much as we enjoy creating these delights.',
    'Thank you for being a part of our story and for choosing BurgerMania to satisfy your burger cravings!'
    ];

    divAboutCont.append(aboutTitle);

    for(let i = 0; i<aboutParas.length; i++) {
        let p = document.createElement('p');
        p.innerText = aboutParas[i];
        divAboutCont.append(p);
    }

    divAboutCont.classList = 'about-cont';

    divDerecha.append(divAboutCont);
    divDerecha.classList = 'derecha'
    
    divPortada.append(divIzquierda, divDerecha);
    seccionAbout.append(divPortada)
    
    
    
    return seccionAbout;

}