
// we need this socket object to send messages to our server 
var socket = io(window.location.origin); 

socket.on('connect', function(){

  console.log('I have made a persistent two-way connection to the server!'); 
  

  // the click event is emitted in clapboard.js and caught here
  clapboard.on('clicked', function toBeRunOnclick(icon){
      socket.emit('registerAction', icon);
  })

  socket.on('showAction', function(icon){
    clapboard.drawAction(icon);
  })

  socket.on('connectionEvent', function(numPlayers) {
    var audience = "person";
    if(numPlayers > 1)  {
        audience = "people";
    }
    if(numPlayers > 0) {
    	$('#num-players span').text(numPlayers + " " + audience + ' connected')
    }
})
  
})

