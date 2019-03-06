var APP_ID = 'w9eXin1A4YxK24Nx3bhLeEYA-gzGzoHsz';
var APP_KEY = 'HoJmutKwll4OOQMxc9lI9mNi';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


message.addEventListener('submit',function(e){
     e.preventDefault()
     let content = message.querySelector('input[name=content]').value
     let name = message.querySelector('input[name=name').value
     var TestObject = AV.Object.extend('message');
     var testObject = new TestObject();
     testObject.save({
     name: name,
     content: content
     }).then(function(object) {
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        messageList.appendChild(li)
     })
    })

    var query = new AV.Query('message');
    query.find().then(function (messages) {
     let array = messages.map((item)=>item.attributes)
      array.forEach((item)=>{
          let li = document.createElement('li')
          li.innerText = `${item.name}: ${item.content}`
          messageList.appendChild(li)
          message.querySelector('input[name=content]').value = ''
      })
    }, )
  