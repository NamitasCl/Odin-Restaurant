import logo from '../assets/img/logo.png'
import facebook from '../assets/img/facebook.svg'
import instagram from '../assets/img/instagram.svg'
import twitter from '../assets/img/twitter.svg'
import whatsapp from '../assets/img/whatsapp.svg'

/* CABECERA CON LOGO ---- LINKS ---- REDES SOCIALES */
export default function header() {

    const header = document.createElement('header');

    const nav = document.createElement('nav');
    nav.classList = 'menu';

    const divLogo = document.createElement('div');
    divLogo.classList = 'logo';

    const imgLogo = document.createElement('img');
    imgLogo.src = logo;

    divLogo.append(imgLogo);

    const divLinks = document.createElement('div');
    divLinks.classList = 'menuLinks';

    const ulLinks = document.createElement('ul');
    divLinks.append(ulLinks);

    const liLinks = ['MENU', 'ABOUT US', 'CONTACT'];
    
    for(let i=0; i<liLinks.length; i++) {
        const li = document.createElement('li');
        li.innerText = liLinks[i];
        ulLinks.append(li);
    }

    const socialLinks = [facebook, instagram, twitter, whatsapp];
    const links = [];
    const divRrss = document.createElement('div');
    divRrss.classList = 'rrss';

    for(let i=0; i<socialLinks.length; i++) {
        let rrssImg = document.createElement('img');
        rrssImg.src = socialLinks[i];
        links.push(rrssImg);
    }

    for(let i=0; i<links.length; i++) {
        divRrss.append(links[i]);
    }

    nav.append(divLogo, divLinks, divRrss);

    header.append(nav);

    return header;
}




