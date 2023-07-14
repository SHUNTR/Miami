const SliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60,
        }
    }
})
const SliderBg = new Swiper('.slider_bg', {
    centeredSlides: true,
    parallax: true,
})
SliderMain.controller.control = SliderBg;

document.querySelectorAll('.slider__item').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('opened')
    })
})

let desc = document.querySelector('.description');
SliderMain.on('slideChange',e=>{
    SliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})