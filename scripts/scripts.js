
document.addEventListener("DOMContentLoaded", ()=>{
    includeNavBar();
    includeHeader();
    includeFooter();
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
            <p>Todos los derechos reservados 2024 &copy | By Cristian Rosales - UTN : Laboratorio III</p>
        `;
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

//Inyecto la navbar y el contenido del HTML en el header
function includeHeader() {
    const header = document.getElementById('header');
    const headerContent = generarHTMLHeader();
    header.innerHTML += headerContent;
}

//Inyecto la navbar y el contenido del HTML en el footer
function includeFooter(){
    const footer = document.getElementById('footer');
    const footerContent = generarHTMLFooter();
    footer.innerHTML += footerContent;
}
