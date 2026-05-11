const carouselWrappers = document.querySelectorAll(".product-carousel-wrapper");

carouselWrappers.forEach(function (wrapper) {
    const swiperElement = wrapper.querySelector(".swiper");
    const nextBtn = wrapper.querySelector(".swiper-button-next");
    const prevBtn = wrapper.querySelector(".swiper-button-prev");

    // JARVIS DETECTOR: Membaca angka dari HTML. Jika Anda lupa menulisnya di HTML, otomatis diisi angka 2.
    const mobileView = wrapper.getAttribute("data-mobile-view") || 2;

    new Swiper(swiperElement, {
        // Menggunakan angka hasil deteksi dari HTML untuk tampilan HP
        slidesPerView: parseInt(mobileView),
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: nextBtn,
            prevEl: prevBtn,
        },
        breakpoints: {
            // Saat layar Tablet
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            // Saat layar Desktop
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });
});
