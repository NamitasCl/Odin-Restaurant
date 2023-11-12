/* SECCION MENU */
import burger_explosion from '../assets/img/burger-explosion.png'


export default function menu() {
    
    const seccionMenu = document.createElement('section');
    const divPortada = document.createElement('div');
    const divIzquierda = document.createElement('div');
    const divTitulo = document.createElement('div');
    const paraFirst = document.createElement('p');
    const paraSecond = document.createElement('p');
    const separador = document.createElement('div');
    const divFinal = document.createElement('div');
    const divBurgerExpl = document.createElement('div');
    const imgBurgerExpl = document.createElement('img');
    const finalH3 = document.createElement('h3');
    const divDerecha = document.createElement('div');
    

    function Product(nombre, descripcion, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }

    /* PARTE IZQUIERDA DE LA CARTA */

    divTitulo.classList = 'titulo';
    paraFirst.innerText = 'THE BEST';
    paraSecond.innerText = 'BURGER';

    divTitulo.append(paraFirst, paraSecond);

    separador.classList = 'separador';

    divFinal.classList = 'final';
    finalH3.innerText = 'MENU';
    
    divFinal.append(finalH3);

    divBurgerExpl.classList = 'burger-expl';
    imgBurgerExpl.src = burger_explosion;

    divBurgerExpl.append(imgBurgerExpl);
    
    divIzquierda.append(divTitulo, separador, divFinal, divBurgerExpl);
    divIzquierda.classList = 'izquierda';

    /* PARTE DERECHA DE LA CARTA 
    
       CREANDO TITULOS DE LAS CATEGORIAS PARA LA CARTA */

    let nomCategorias = ['BURGERS', 'FRIES', 'DRINKS', 'DESSERTS'];
    
    /* AQUI SE CREA EL TITULO DE CADA CATEGORIA DE LA CARTA */
    let titulosCategorias = [];

    for(let i=0; i<nomCategorias.length; i++) {
        let divTituloCategoria = document.createElement('div');
        divTituloCategoria.classList = 'title';
        let tituloCategoriaH1 = document.createElement('h1');
        tituloCategoriaH1.innerText = nomCategorias[i];
        divTituloCategoria.append(tituloCategoriaH1);
        titulosCategorias.push(divTituloCategoria);
    }

    /* AQUI ARMO TODOS LOS PRODUCTOS QUE SE EXHIBEN EN LA CARTA */

    let burgers = [];
    let fries = [];
    let drinks = [];
    let desserts = [];

    let todosProductos = [burgers, fries, drinks, desserts];

    /* BURGERS PRODUCTS */
    for(let i=0; i<3; i++) {
        let p = new Product('PRODUCT', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, earum! Illum ab maxime sit, minus voluptatem rerum doloremque quis quae excepturi.', '$ 9.500');

        const product = document.createElement('div');
        product.classList = 'products';
        const productCont = document.createElement('div');
        productCont.classList = 'product-cont';
        const productH3 = document.createElement('h3');
        const productPara = document.createElement('p');
        const divProductPrice = document.createElement('div');
        divProductPrice.classList = 'product-price';
        const divProductSpan = document.createElement('span');

        productH3.innerText = p.nombre;
        productPara.innerText = p.descripcion;
        divProductSpan.innerText = p.precio;

        divProductPrice.append(divProductSpan);
        productCont.append(productH3, productPara);
        product.append(productCont, divProductPrice);

        burgers.push(product);
    }

    /* FRIES PRODUCTS */
    for(let i=0; i<3; i++) {
        let p = new Product('PRODUCT', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, earum! Illum ab maxime sit, minus voluptatem rerum doloremque quis quae excepturi.', '$ 9.500');

        const product = document.createElement('div');
        product.classList = 'products';
        const productCont = document.createElement('div');
        productCont.classList = 'product-cont';
        const productH3 = document.createElement('h3');
        const productPara = document.createElement('p');
        const divProductPrice = document.createElement('div');
        divProductPrice.classList = 'product-price';
        const divProductSpan = document.createElement('span');

        productH3.innerText = p.nombre;
        productPara.innerText = p.descripcion;
        divProductSpan.innerText = p.precio;

        divProductPrice.append(divProductSpan);
        productCont.append(productH3, productPara);
        product.append(productCont, divProductPrice);

        fries.push(product);
    }

    /* DRINKS PRODUCTS */
    for(let i=0; i<3; i++) {
        let p = new Product('PRODUCT', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, earum! Illum ab maxime sit, minus voluptatem rerum doloremque quis quae excepturi.', '$ 9.500');

        const product = document.createElement('div');
        product.classList = 'products';
        const productCont = document.createElement('div');
        productCont.classList = 'product-cont';
        const productH3 = document.createElement('h3');
        const productPara = document.createElement('p');
        const divProductPrice = document.createElement('div');
        divProductPrice.classList = 'product-price';
        const divProductSpan = document.createElement('span');

        productH3.innerText = p.nombre;
        productPara.innerText = p.descripcion;
        divProductSpan.innerText = p.precio;

        divProductPrice.append(divProductSpan);
        productCont.append(productH3, productPara);
        product.append(productCont, divProductPrice);

        drinks.push(product);
    }

    /* DESSERTS PRODUCTS*/
    for(let i=0; i<3; i++) {
        let p = new Product('PRODUCT', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, earum! Illum ab maxime sit, minus voluptatem rerum doloremque quis quae excepturi.', '$ 9.500');

        const product = document.createElement('div');
        product.classList = 'products';
        const productCont = document.createElement('div');
        productCont.classList = 'product-cont';
        const productH3 = document.createElement('h3');
        const productPara = document.createElement('p');
        const divProductPrice = document.createElement('div');
        divProductPrice.classList = 'product-price';
        const divProductSpan = document.createElement('span');

        productH3.innerText = p.nombre;
        productPara.innerText = p.descripcion;
        divProductSpan.innerText = p.precio;

        divProductPrice.append(divProductSpan);
        productCont.append(productH3, productPara);
        product.append(productCont, divProductPrice);

        desserts.push(product);
    }

    let htmlSeccionCategoria = [];

    for(let i=0; i<nomCategorias.length; i++) {
        
        let divCategoria = document.createElement('div');
        divCategoria.classList = nomCategorias[i].toLowerCase();
        divCategoria.append(titulosCategorias[i]);

        for(let j=0; j<todosProductos[i].length; j++) {
            divCategoria.append(todosProductos[i][j]);
        }

        htmlSeccionCategoria.push(divCategoria);

    }
    

    divDerecha.classList = 'derecha';
    
    for(let i=0; i<htmlSeccionCategoria.length; i++) {
        divDerecha.append(htmlSeccionCategoria[i]);
    }

    divPortada.append(divIzquierda, divDerecha);
    divPortada.classList = 'portada';

    seccionMenu.append(divPortada);
    seccionMenu.id = 'menu';

    return seccionMenu;

}