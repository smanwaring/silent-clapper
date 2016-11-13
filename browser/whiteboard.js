
// this is global now 
window.whiteboard = new window.EventEmitter();

(function () {
    var clickers = [].slice.call(document.querySelectorAll('.clicker'));

    clickers.forEach(function (el) {
        el.addEventListener('click', function () {
            whiteboard.emit('clicked');
        });

    });

    var canvas = document.querySelector('#paint');
    var sketch = document.querySelector('#sketch');
    var sketchStyle = getComputedStyle(sketch);

    canvas.width = parseInt(sketchStyle.getPropertyValue('width'));
    canvas.height = parseInt(sketchStyle.getPropertyValue('height'));


    whiteboard.drawAction = function () {
        console.log("adding image to canvas!");
        let clap = document.createElement('img');
        clap.setAttribute('src','High_Five_Emoji.png');
        clap.style.position = "absolute";
        clap.style.top = Math.random() * canvas.height;
        clap.style.left = Math.random() * canvas.height; 
        clap.height = "40";
        clap.width = "40";
        document.body.appendChild(clap);
    };



})();