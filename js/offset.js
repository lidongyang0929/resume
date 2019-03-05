for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}
window.addEventListener('scroll',function(){
    findClosest()
    specialTags[minIndex].classList.remove('offset')
})
