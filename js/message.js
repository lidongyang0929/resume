!function(){
var view = document.querySelector('section.myMessage')
var controller = {
  view: null,
  form:null,
  init: function(view){
    this.view=view
    this.form = document.querySelector('#form')
    this.initAV()
    this.loadMessages()
    this.bindEvents()
  },
  initAV: function(){
    var APP_ID = 'w9eXin1A4YxK24Nx3bhLeEYA-gzGzoHsz';
    var APP_KEY = 'HoJmutKwll4OOQMxc9lI9mNi';
    
    AV.init({
      appId: APP_ID,
      appKey: APP_KEY
    });
  },
  bindEvents: function(){
    this.form.addEventListener(('submit'),(e)=>{
      e.preventDefault()
      this.saveMessage()
     }) 
  },
  saveMessage: function(){
    let content = this.form.querySelector('input[name=content]').value
    let name = this.form.querySelector('input[name=name').value
    var TestObject = AV.Object.extend('message');
    var testObject = new TestObject();
    testObject.save({
    name: name,
    content: content
    }).then(function(object) {
     let li = document.createElement('li')
     li.innerText = `${object.attributes.name}: ${object.attributes.content}`
     messageList.appendChild(li)
     this.form.querySelector('input[name=content]').value = ''
  })
  },
  
   loadMessages: function(){
    var query = new AV.Query('message');
    query.find().then(function (messages) {
     let array = messages.map((item)=>item.attributes)
      array.forEach((item)=>{
          let li = document.createElement('li')
          li.innerText = `${item.name}: ${item.content}`
          messageList.appendChild(li)
         
      })
    }, )
  }
}
controller.init(view)

  

  }.call()