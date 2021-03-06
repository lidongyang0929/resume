!function(){
var view = document.querySelector('section.myMessage')
var model = {
  init: function(){
    var APP_ID = 'w9eXin1A4YxK24Nx3bhLeEYA-gzGzoHsz';
    var APP_KEY = 'HoJmutKwll4OOQMxc9lI9mNi';
    
    AV.init({
      appId: APP_ID,
      appKey: APP_KEY
    });
  },
  fetch: function(){
    var query = new AV.Query('message');
    return query.find()
  },
  save: function(name,content){
    var TestObject = AV.Object.extend('message');
    var testObject = new TestObject();
    return testObject.save({
    name: name,
    content: content
    })
  }
}
var controller = {
  view: null,
  form:null,
  model:null,
  messageList:null,
  init: function(view,model){
    this.view=view
    this.model=model
    this.form = view.querySelector('#form')
    this.messageList= view.querySelector('#messageList')
    this.model.init()
    this.loadMessages()
    this.bindEvents()
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
    if(content){
    this.model.save(name,content).then(function(messages) {
     let li = document.createElement('li')
     li.innerText = `${messages.attributes.name}: ${messages.attributes.content}`
     this.messageList.appendChild(li)
     this.form.querySelector('input[name=content]').value = ''
  })
  }},
  
   loadMessages: function(){
     
    this.model.fetch().then(function (messages) {
     let array = messages.map((item)=>item.attributes)
      array.forEach((item)=>{
          let li = document.createElement('li')
          li.innerText = `${item.name}: ${item.content}`
          this.messageList.appendChild(li)
         
      })
    }, )
  }
}
controller.init(view,model)

  

  }.call()