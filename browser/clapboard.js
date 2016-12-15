
// this is global now and accessible anywhere 
window.clapboard = new window.EventEmitter();


(function () {
    //get all of the elements with class "clicker"
    var clickers = [].slice.call(document.querySelectorAll('.clicker'));
    //get all of the elements with class "column"
    var columns = [].slice.call(document.querySelectorAll('.columns'));

    //loop over each "clicker" element and add the "click" event listener to it (which emits the "clicked" event)
    //pass the element icon in as the payload 
    clickers.forEach(function (el) {
        el.addEventListener('click', function () {
            clapboard.emit('clicked', {
                icon: el.dataset.icon
            });
        });
    });

    //initiates animations
    function addIcons(icon) {
        var lowRange = 1.0,
            highRange = 1.6,
            uniqueIdentifier = Math.floor((Math.random() * 100) + 1),
            flowArray = ["flowOne", "flowTwo", "flowThree"],
            colArray = ["colOne", "colTwo", "colThree", "colFour", "colFive", "colSix"],
            speed = (Math.random() * (highRange - lowRange) + lowRange).toFixed(1)

        function randomColumnContainer () {
            var toReturn = ".column-" + Math.floor(Math.random() * columns.length);
            return toReturn;
        }
        
        $('<div class="column part-' + uniqueIdentifier + " " + colArray[Math.floor((Math.random() * 6))] + '" style="font-size:' + Math.floor(Math.random() * (50 - 22) + 80) + 'px;"><i class="' + icon + '"></i></div>')
            .appendTo(randomColumnContainer()).css({
                animation: "" + flowArray[Math.floor((Math.random() * 3))] + " " + speed + "s linear"
            });

        $(".part-" + uniqueIdentifier).show();
        
        setTimeout(function() {
            $(".part-" + uniqueIdentifier).remove()
        }, speed * 900)
    }

    //emitted on showaction in app.js, calls addIcons which starts the animations
    clapboard.drawAction = function (icon) {
        addIcons(icon.icon);
    };


})();



