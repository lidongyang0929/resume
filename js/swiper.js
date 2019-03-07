!function(){
var view = View('#mySlides')
var controller = {
    view: null,
    swiper:null,
    initSwiper: function(){
        this.swiper = new Swiper(this.view.querySelector('.swiper-container'), {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })
    },
    init: function(view){
        this.view = view
        this.initSwiper()
       }
}

controller.init(view)

}.call()
