// we need this socket object to send messages to our server 
var socket = io(window.location.origin); 

socket.on('connect', function(){

  // the click event is emitted in clapboard.js and caught here with the icon payload, woo!
  clapboard.on('clicked', function(icon){
      socket.emit('registerAction', icon);
  })

  // emitted from server, caught here with the icon and calls drawAction which does initiates CSS animations!
  socket.on('showAction', function(icon){
    clapboard.drawAction(icon);
  })

  //emitted from server, caught here with the current num of people connected
  socket.on('connectionEvent', function(numPeople) {
    var audience = "person";
    if(numPeople > 1)  {
        audience = "people";
    }
    if(numPeople > 0) {
    	$('#num-people span').text(numPeople + " " + audience + ' connected')
    }
  })
})

