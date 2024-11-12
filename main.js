function efeitoblur() {
    document.querySelector('#btn-entre-em-contato').addEventListener('mouseenter' , () => {
        document.querySelector('#btn-portifolio').style.filter = 'blur(3px)'
        document.querySelector('#btn-entre-em-contato').style.filter = 'blur(0px)'
    })
    document.querySelector('#btn-entre-em-contato').addEventListener('mouseleave' , () => {
        document.querySelector('#btn-portifolio').style.filter = 'blur(0px)'
    })
    document.querySelector('#btn-portifolio').addEventListener('mouseenter' , () => {
        document.querySelector('#btn-entre-em-contato').style.filter = 'blur(3px)'
        document.querySelector('#btn-entre-em-contato').style.opacity = '0.3'
    })
    document.querySelector('#btn-portifolio').addEventListener('mouseleave' , () => {
        document.querySelector('#btn-entre-em-contato').style.filter = 'blur(0px)'
        document.querySelector('#btn-entre-em-contato').style.opacity = '1'
    })
}