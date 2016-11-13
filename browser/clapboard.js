
// this is global now 
window.clapboard = new window.EventEmitter();

(function () {
    var clickers = [].slice.call(document.querySelectorAll('.clicker'));
    var hearts = [].slice.call(document.querySelectorAll('.hearts'));

    clickers.forEach(function (el) {
        el.addEventListener('click', function () {
            clapboard.emit('clicked', {
                icon: el.dataset.icon
            });
        });

    });

    var canvas = document.querySelector('#paint');
    var sketch = document.querySelector('#sketch');
    var sketchStyle = getComputedStyle(sketch);

    canvas.width = parseInt(sketchStyle.getPropertyValue('width'));
    canvas.height = parseInt(sketchStyle.getPropertyValue('height'));


    clapboard.drawAction = function (icon) {
        console.log("adding image to canvas!");
        addClaps();
        addIcons(icon.icon);
    };

    function addClaps() {
        let clap = document.createElement('img');
        clap.setAttribute('src','High_Five_Emoji.png');
        clap.style.position = "absolute";
        clap.style.top = Math.random() * window.innerHeight;
        clap.style.left = Math.random() * window.innerWidth; 
        clap.height = "40";
        clap.width = "40";
        document.body.appendChild(clap);
    }

    function addIcons(icon) {
        var b = Math.floor((Math.random() * 100) + 1);
        var d = ["flowOne", "flowTwo", "flowThree"];
        var a = ["colOne", "colTwo", "colThree", "colFour", "colFive", "colSix"];
        var c = (Math.random() * (1.6 - 1.2) + 1.2).toFixed(1);

        function randomHeartsContainer (){
            var toReturn = ".hearts-" + Math.floor(Math.random() * hearts.length);
            console.log(toReturn);
            return toReturn;
        }
        
        $('<div class="heart part-' + b + " " + a[Math.floor((Math.random() * 6))] + '" style="font-size:' + Math.floor(Math.random() * (50 - 22) + 22) + 'px;"><i class="' + icon + '"></i></div>')
            .appendTo(randomHeartsContainer()).css({
                animation: "" + d[Math.floor((Math.random() * 3))] + " " + c + "s linear"
            });

        $(".part-" + b).show();
        
        setTimeout(function() {
            $(".part-" + b).remove()
        }, c * 900)
    }



})();