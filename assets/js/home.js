const swiper = new Swiper("section.story", {
    slidesPerView: 4,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        600: {
            slidesPerView: 6,
        },
        1000: {
            slidesPerView: 10,
        }
    },
});