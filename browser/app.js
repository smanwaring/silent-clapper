
// we need this socket object to send messages to our server 
var socket = io(window.location.origin); 

socket.on('connect', function(){

  console.log('I have made a persistent two-way connection to the server!'); 
  

  // the draw event is emitted in whiteboard.js and caught here
  clapboard.on('clicked', function toBeRunOnclick(icon){
  	  console.log('whiteboard.on clicked')
      socket.emit('registerAction', icon)
  })

  socket.on('showAction', function(icon){
  	console.log("socket.on other showAction")
    clapboard.drawAction(icon)
  })
  
})

