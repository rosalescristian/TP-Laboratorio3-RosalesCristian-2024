document.addEventListener("DOMContentLoaded", ()=>{
    includeNavBar();
    includeHeader();
    includeFooter();
    loadContent();
});

// Genero la nav bar
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

// Genero el resto del contenido del Header en HTML
function generarHTMLHeader(){
    const headerHTML = `
        <img class="logo" src="./images/logo.svg" alt="Logo Empresa">
        <h1>Venta de Casas y Departamentos<br>Exclusivos de Lujo</h1>`;
    return headerHTML;
}

// Genero el contenido del Footer en HTML
function generarHTMLFooter(){
    const footerHTML = `
        <p>Todos los derechos reservados 2024 &copy | By Cristian Rosales - UTN : Laboratorio III</p>`;
    return footerHTML;
}

// Inyecto la navbar en el header y el footer
function includeNavBar(){
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const navBar = generarNavBar();

    header.innerHTML = navBar;
    footer.innerHTML = navBar;
}

// Inyecto la navbar y el contenido del HTML en el header
function includeHeader() {
    const header = document.getElementById('header');
    const headerContent = generarHTMLHeader();
    header.innerHTML += headerContent;
}

// Inyecto la navbar y el contenido del HTML en el footer
function includeFooter(){
    const footer = document.getElementById('footer');
    const footerContent = generarHTMLFooter();
    footer.innerHTML += footerContent;
}

// Funciones para crear tarjetas y posts
function createCard(imageSrc, imageAlt, title, description) {
    return `
        <article>
            <img src="./images/${imageSrc}" alt="${imageAlt}">    
            <h3>${title}</h3>
            <p>${description}</p>
        </article>
    `;
}

function createPropertyCard(imageSrc, imageAlt, title, description, price, wc, parking, bedrooms) {
    return `
        <article>
            <img src="./images/${imageSrc}" alt="${imageAlt}">
            <h3>${title}</h3>
            <p>${description}</p>
            <p id="precio">${price}</p>
            <div class="contenedor-iconos">
                <span><img src="./images/icono_wc.svg" alt="Baños">${wc}</span>
                <span><img src="./images/icono_estacionamiento.svg" alt="Estacionamiento">${parking}</span>
                <span><img src="./images/icono_dormitorio.svg" alt="Dormitorios">${bedrooms}</span>
            </div>
            <button class="boton-grande-naranja">Ver Propiedad</button>
        </article>
    `;
}

function createBlogPost(imageSrc, title, date, author, description) {
    return `
        <article class="blog-post">
            <div class="blog-texto">
                <h4>${title}</h4>
                <img src="./images/${imageSrc}" alt="${title}">
                <h5>Escrito el: <span>${date}</span> por <span>${author}</span></h5>
                <p>${description}</p>    
            </div>
        </article>
    `;
}

// Función para cargar contenido
function loadContent() {
    document.querySelector('.nosotros-tarjetas').innerHTML = `
        ${createCard('icono1.svg', 'Icono Seguridad', 'Seguridad', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis a perspiciatis ducimus, cupiditate dicta distinctio pariatur ipsum dolores! Quia odio modi quis repellendus quo voluptatibus iure voluptas voluptates qui labore!')}
        ${createCard('icono2.svg', 'Icono Precio', 'Mejor precio', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis a perspiciatis ducimus, cupiditate dicta distinctio pariatur ipsum dolores! Quia odio modi quis repellendus quo voluptatibus iure voluptas voluptates qui labore!')}
        ${createCard('icono3.svg', 'Icono Tiempo', 'A tiempo', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis a perspiciatis ducimus, cupiditate dicta distinctio pariatur ipsum dolores! Quia odio modi quis repellendus quo voluptatibus iure voluptas voluptates qui labore!')}
    `;

    document.querySelector('.clasificados-tarjetas').innerHTML = `
        ${createPropertyCard('anuncio1.jpg', 'Casa en el Lago', 'Casa de Lujo en el Lago', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ex minus? Tempora sit animi et maiores, cupiditate unde voluptas voluptates fuga nisi reiciendis nemo perferendis deserunt quidem suscipit asperiores voluptatibus!', 'U$S 350.000', 3, 3, 4)}
        ${createPropertyCard('anuncio2.jpg', 'Casa moderna', 'Casa terminados de Lujo', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ex minus? Tempora sit animi et maiores, cupiditate unde voluptas voluptates fuga nisi reiciendis nemo perferendis deserunt quidem suscipit asperiores voluptatibus!','U$S 275.000', 3, 3, 4)}
        ${createPropertyCard('anuncio3.jpg', 'Casa con Pileta', 'Casa Con Pileta', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ex minus? Tempora sit animi et maiores, cupiditate unde voluptas voluptates fuga nisi reiciendis nemo perferendis deserunt quidem suscipit asperiores voluptatibus!','U$S 250.000', 3, 3, 4)}
    `;

    document.querySelector('.blog-tarjetas').innerHTML = `
        ${createBlogPost('blog1.jpg', 'Terraza en el techo de tu casa', '2024/05/01', 'Cristian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}
    `;
}
