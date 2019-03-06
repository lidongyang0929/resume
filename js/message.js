var APP_ID = 'w9eXin1A4YxK24Nx3bhLeEYA-gzGzoHsz';
var APP_KEY = 'HoJmutKwll4OOQMxc9lI9mNi';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


message.addEventListener('submit',function(e){
     e.preventDefault()
     let content = message.querySelector('input[name=content]').value
     var TestObject = AV.Object.extend('message');
     var testObject = new TestObject();
     testObject.save({
     content: content
     }).then(function(object) {
     window.location.reload()
     })
    })


    var query = new AV.Query('message');
    query.find().then(function (messages) {
     let array = messages.map((item)=>item.attributes)
      array.forEach((item)=>{
          let li = document.createElement('li')
          console.log(item.content)
          li.innerText = item.content
          messageList.appendChild(li)
      })
    }, function (error) {
      
    }).then(()=>{},function(error){
        console.log(error)
    });
  