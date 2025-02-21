const carousel = document.getElementById("carousel");
        let index = 0;
        const totalImages = 10; // Quantidade total de imagens
        const visibleImages = 5; // Quantidade visível ao mesmo tempo

        function moveSlide() {
            index = (index + visibleImages) % totalImages;
            carousel.style.transform = `translateX(-${index * 20}%)`; // 20% porque 5 imagens ocupam 100%
        }

        setInterval(moveSlide, 4000); // Muda a cada 3 segundos