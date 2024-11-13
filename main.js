
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

    site = document.querySelector('#div-site')
    design = document.querySelector('#div-design')
    seo = document.querySelector('#div-seo')
    idv = document.querySelector('#div-idv')
    site.addEventListener('mouseleave' , function () {
        blurEffectRmv(design)
        blurEffectRmv(seo)
        blurEffectRmv(idv)
    })

    site.addEventListener('mouseover' , function () {
        blurEffectAdd(design)
        blurEffectAdd(seo)
        blurEffectAdd(idv)
    })
    
    site.addEventListener('mouseleave' , function () {
        blurEffectRmv(design)
        blurEffectRmv(seo)
        blurEffectRmv(idv)
    })

    design.addEventListener('mouseover' , function () {
        blurEffectAdd(site)
        blurEffectAdd(seo)
        blurEffectAdd(idv)
    })
    
    design.addEventListener('mouseleave' , function () {
        blurEffectRmv(site)
        blurEffectRmv(seo)
        blurEffectRmv(idv)
    })

    seo.addEventListener('mouseover' , function () {
        blurEffectAdd(site)
        blurEffectAdd(design)
        blurEffectAdd(idv)
    })
    
    seo.addEventListener('mouseleave' , function () {
        blurEffectRmv(site)
        blurEffectRmv(design)
        blurEffectRmv(idv)
    })

    idv.addEventListener('mouseover' , function () {
        blurEffectAdd(site)
        blurEffectAdd(seo)
        blurEffectAdd(design)
    })
    
    idv.addEventListener('mouseleave' , function () {
        blurEffectRmv(site)
        blurEffectRmv(seo)
        blurEffectRmv(design)
    })


function blurEffectAdd(a) {
    a.style.filter = 'blur(5px)'
    a.style.transition = '0.5s'
}

function blurEffectNone(a) {
    a.style.filter = 'none'
}

function blurEffectRmv(a) {
    a.style.filter = 'none'
}