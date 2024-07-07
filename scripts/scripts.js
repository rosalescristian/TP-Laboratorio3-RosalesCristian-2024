document.addEventListener("DOMContentLoaded", () => {
    includeNavBar();
    includeHeader();
    includeFooter();
    loadContent();
});

function generarNavBar() {
    const navBarHTML = `
        <nav>
            <ul>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Anuncios</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>`;
    return navBarHTML;
}

function generarHTMLHeader() {
    const headerHTML = `
        <img class="logo" src="./images/logo.svg" alt="Logo Empresa" class="animado">
        <h1>Venta de Casas y Departamentos<br>Exclusivos de Lujo</h1>`;
    return headerHTML;
}

function generarHTMLFooter() {
    const footerHTML = `
        <p>Todos los derechos reservados 2024 &copy | By Cristian Rosales - UTN : Laboratorio III</p>`;
    return footerHTML;
}

function includeNavBar() {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const navBar = generarNavBar();

    header.innerHTML = navBar;
    footer.innerHTML = navBar;
}

function includeHeader() {
    const header = document.getElementById('header');
    const headerContent = generarHTMLHeader();
    header.innerHTML += headerContent;
}

function includeFooter() {
    const footer = document.getElementById('footer');
    const footerContent = generarHTMLFooter();
    footer.innerHTML += footerContent;
}

function updateCardElements(template, data) {
    template.querySelector('img').src = `./images/${data.imageSrc}`;
    template.querySelector('img').alt = data.imageAlt;
    template.querySelector('h3').textContent = data.title;
    template.querySelector('p').textContent = data.description;
}

function createCard(templateId, data) {
    const template = document.getElementById(templateId).content.cloneNode(true);
    /* template.querySelector('img').src = `./images/${data.imageSrc}`;
    template.querySelector('img').alt = data.imageAlt;
    template.querySelector('h3').textContent = data.title;
    template.querySelector('p').textContent = data.description; */
    
    updateCardElements(template, data);
    
    return template;
}

function createPropertyCard(templateId, data) {
    const template = document.getElementById(templateId).content.cloneNode(true);
    /* template.querySelector('img').src = `./images/${data.imageSrc}`;
    template.querySelector('img').alt = data.imageAlt;
    template.querySelector('h3').textContent = data.title;
    template.querySelector('p').textContent = data.description; */

    updateCardElements(template, data);
    
    template.querySelector('#precio').textContent = data.price;
    const iconos = template.querySelector('.contenedor-iconos').children;
    iconos[0].innerHTML += data.wc;
    iconos[1].innerHTML += data.parking;
    iconos[2].innerHTML += data.bedrooms;
    return template;
}

function createBlogPost(templateId, data) {
    const template = document.getElementById(templateId).content.cloneNode(true);
    template.querySelector('.bg-img').style.backgroundImage = `url(./images/${data.imageSrc})`;
    template.querySelector('h3').textContent = data.title;
    template.querySelector('.lead').textContent = `${data.date} por ${data.author}`;
    template.querySelectorAll('p')[1].textContent = data.description;
    return template;
}

function loadContent() {
    
    const nosotrosTarjetas = document.querySelector('.nosotros-tarjetas');
    const clasificadosTarjetas = document.querySelector('.clasificados-tarjetas');
    const blogSection = document.querySelector('.blog');

    const templateIdNosotros = 'nosotros-template';
    const templateIdClasificados = 'propiedad-template';
    const templateIdBlog = 'blog-template';

    const nosotrosData = [
        { templateId: templateIdNosotros, imageSrc: 'icono1.svg', imageAlt: 'Icono Seguridad', title: 'Seguridad', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis a perspiciatis ducimus, cupiditate dicta distinctio pariatur ipsum dolores! Quia odio modi quis repellendus quo voluptatibus iure voluptas voluptates qui labore!' },
        { templateId: templateIdNosotros, imageSrc: 'icono2.svg', imageAlt: 'Icono Precio', title: 'Mejor precio', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis a perspiciatis ducimus, cupiditate dicta distinctio pariatur ipsum dolores! Quia odio modi quis repellendus quo voluptatibus iure voluptas voluptates qui labore!' },
        { templateId: templateIdNosotros, imageSrc: 'icono3.svg', imageAlt: 'Icono Tiempo', title: 'A tiempo', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis a perspiciatis ducimus, cupiditate dicta distinctio pariatur ipsum dolores! Quia odio modi quis repellendus quo voluptatibus iure voluptas voluptates qui labore!' }
    ];

    const clasificadosData = [
        { templateId: templateIdClasificados, imageSrc: 'anuncio1.jpg', imageAlt: 'Casa en el Lago', title: 'Casa de Lujo en el Lago', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ex minus? Tempora sit animi et maiores, cupiditate unde voluptas voluptates fuga nisi reiciendis nemo perferendis deserunt quidem suscipit asperiores voluptatibus!', price: 'U$S 350.000', wc: 3, parking: 3, bedrooms: 4 },
        { templateId: templateIdClasificados, imageSrc: 'anuncio2.jpg', imageAlt: 'Casa moderna', title: 'Casa terminados de Lujo', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ex minus? Tempora sit animi et maiores, cupiditate unde voluptas voluptates fuga nisi reiciendis nemo perferendis deserunt quidem suscipit asperiores voluptatibus!', price: 'U$S 275.000', wc: 3, parking: 3, bedrooms: 4 },
        { templateId: templateIdClasificados, imageSrc: 'anuncio3.jpg', imageAlt: 'Casa con Pileta', title: 'Casa Con Pileta', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ex minus? Tempora sit animi et maiores, cupiditate unde voluptas voluptates fuga nisi reiciendis nemo perferendis deserunt quidem suscipit asperiores voluptatibus!', price: 'U$S 250.000', wc: 3, parking: 3, bedrooms: 4 }
    ];

    const blogData = [
        { templateId: templateIdBlog, imageSrc: 'blog1.jpg', title: 'Terraza en el techo de tu casa', date: '2024/05/01', author: 'Cristian', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..' },
        { templateId: templateIdBlog, imageSrc: 'blog2.jpg', title: 'Guia para la decoracion de tu hogar', date: '2024/07/01', author: 'Cristian', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
    ];

    nosotrosData.forEach(item => nosotrosTarjetas.appendChild(createCard(item.templateId, item)));
    clasificadosData.forEach(item => clasificadosTarjetas.appendChild(createPropertyCard(item.templateId, item)));
    blogData.forEach(item => blogSection.appendChild(createBlogPost(item.templateId, item)));

}