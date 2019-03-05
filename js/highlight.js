var specialTags = document.querySelectorAll('[data-x]')
var minIndex = 0
findClosest()
hightlight()

window.addEventListener('scroll',function(){
    findClosest()
    hightlight()
})


function findClosest() { 
    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i
        }
     }
     return minIndex  
}
function hightlight(){
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brothersAndMe = li.parentNode.children
    for(let i=0;i<brothersAndMe.length;i++){
        brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
    
}