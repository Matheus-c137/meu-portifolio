valiMenu = false

window.addEventListener('resize', () => {
    document.querySelector('#menu-mobile').style.width = '3,5rem'
    displayMudar()

})

function menuMobile() {
    let elemento = document.querySelector('.navbar-mobile')
    let elementoMenu = document.querySelector('#menu-mobile')

    if (window.innerWidth <= 768) {
        if (valiMenu == false) {
            elemento.style.display = 'flex'
            elemento.style.position = 'absolute'
            elemento.style.left = '0'
            elementoMenu.src = 'images/icons/marca-cruzada.png'
            elementoMenu.style.width = '2rem'
            document.body.style.overflow = 'hidden';
            valiMenu = true
        } else {
            elementoMenu.style.display = 'block'
            elemento.style.position = 'absolute'
            elemento.style.left = '-100%'
            elementoMenu.style.width = '3.5rem'
            elementoMenu.src = 'images/icons/hamburguer-menu.png'
            document.body.style.overflow = '';
            valiMenu = false
        }
    }
}

function displayMudar() {
    let elemento = document.querySelector('.navbar-mobile')
    let elementoMenu = document.querySelector('#menu-mobile')

    if (window.innerWidth > 768) {
        elemento.style.display = 'none'
        elementoMenu.style.display = 'none'
        document.querySelector('#menu-mobile').src = 'images/icons/hamburguer-menu.png'
    } else {
        elemento.style.display = ''
        elementoMenu.style.display = ''
    }
}