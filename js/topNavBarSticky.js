!function(){
var view = document.querySelector('#topNavBar')
var controller = {
    view: null,
    bindEvents : function(){
        var view = this.view
        window.addEventListener('scroll',function(){
            if (window.scrollY > 0) {
                this.active
            } else {
                this.deactive
            }}
        )
    }.bind(this),
    active: function(){
        this.view.classList.add('sticky')
    },
    deactive: function(){
        this.view.classList.remove('sticky')
    },
    init: function(view){
        this.view = view
        this.bindEvents()
    }
}
controller.init(view)

}.call()