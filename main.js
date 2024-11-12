function efeitoblur() {
    let botaoEntreContato = document.querySelector('#btn-entre-em-contato')
    let botaoPortifolio = document.querySelector('#btn-portifolio')
    botaoEntreContato.addEventListener('mouseenter' , () => {
        botaoPortifolio.style.filter = 'blur(3px)'
        botaoEntreContato.style.filter = 'blur(0px)'
    })
    botaoEntreContato.addEventListener('mouseleave' , () => {
        botaoPortifolio.style.filter = 'blur(0px)'
        allElements.style.filter = 'none'
        document.querySelector('.textos').style.filter = 'none'
    })
    botaoPortifolio.addEventListener('mouseenter' , () => {
        botaoEntreContato.style.filter = 'blur(3px)'
        botaoEntreContato.style.opacity = '0.3'
    })
    botaoPortifolio.addEventListener('mouseleave' , () => {
        botaoEntreContato.style.filter = 'blur(0px)'
        botaoEntreContato.style.opacity = '1'
    })
}