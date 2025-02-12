function menuHamburguer() {
    let menuListMobile = document.querySelector('.menu-mobile')
    if (menuListMobile.classList.contains('menu-mobile-ativado')) {
        menuListMobile.classList.remove('menu-mobile-ativado')
        document.querySelector('#icone-menu').src = 'assets/images/menu-branco.svg'
    } else {
        menuListMobile.classList.add('menu-mobile-ativado')
        menuListMobile.style.backgroundImage = 'linear-gradient(90deg, #1E1E1E, #0C1E3B)'
        document.querySelector('#icone-menu').src ='assets/images/fechar-menu-branco.svg'
    }
}

function abrirPop() {
    let janela = document.querySelector(".janela-pop")

    janela.style.display = 'flex'
}

function fecharPop() {
    let janela = document.querySelector(".janela-pop")

    janela.style.display = 'none'
}
