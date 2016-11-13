
// we need this socket object to send messages to our server 
var socket = io(window.location.origin); 

socket.on('connect', function(){

  console.log('I have made a persistent two-way connection to the server!'); 
  

  // the draw event is emitted in whiteboard.js and caught here
  whiteboard.on('clicked', function toBeRunOnclick(){
  	  console.log('whiteboard.on clicked')
      socket.emit('registerAction')
  })

  socket.on('showAction', function(){
  	console.log("socket.on other showAction")
    whiteboard.drawAction()
  })
  
})

