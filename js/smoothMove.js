!function(){
var view = document.querySelector('nav.menu')
var controller = {
    view: null,
    init: function(view){
        this.view = view
        this.initAnimate()
        this.bindEvents()
    },
    bindEvents:function(){
        let aTags=this.view.querySelectorAll('nav.menu > ul > li > a')
        for (let i = 0; i < aTags.length; i++) {
            aTags[i].onclick = function (x) {
                x.preventDefault()
                let a = x.currentTarget
                let href = a.getAttribute('href')
                let element = document.querySelector(href)
                scrollToElement(element)
            }
        }
        
    },
    scrollToElement:function(element){
        let top = element.offsetTop
        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop
        let t = Math.abs((s / 100) * 300)
        if (t > 500) { t = 500 }
        var coords = { y: currentTop };
        var tween = new TWEEN.Tween(coords)
            .to({ y: targetTop }, t)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {
                window.scrollTo(0, coords.y)
            })
            .start();
    },
    initAnimate: function(){
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);
    }
    
}








controller.init(view)



}.call()