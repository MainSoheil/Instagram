const swiper = new Swiper("section.story", {
    slidesPerView: 6,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1000: {
            slidesPerView: 10,
        }
    },
});