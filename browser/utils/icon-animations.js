export default function addIcons(icon) {
    let columns = [].slice.call(document.querySelectorAll('.columns'));
    let lowRange = 1.2,
        highRange = 1.6,
        flowArray = ["flowOne", "flowTwo", "flowThree"],
        colorArray = ["colOne", "colTwo", "colThree", "colFour", "colFive", "colSix"],
        speed = (Math.random() * (highRange - lowRange) + lowRange).toFixed(1);

    //pick a random column on the page
    function randomColumnContainer () {
        var column = '.column-' + Math.floor(Math.random() * columns.length);
        return column;
    }

    //creating DIV element
    let animationDiv = document.createElement('div');

    //creating icon element (which will be appended to the animationDiv)
    let iconElement = document.createElement('i');

    //choose a random column on the window to display the animation
    let randomColumn =  document.querySelector(randomColumnContainer());

    //adding classes to the animationDiv, includes column spec and icon animation color
    animationDiv.setAttribute('class', `column ${colorArray[Math.floor(Math.random() * 6)]}`);

    //setting size of the icon element between a certain range
    iconElement.style.fontSize = Math.floor(Math.random() * (50 - 22) + 80) + 'px';
    
    //set the icon to the passed in icon
    iconElement.setAttribute('class', `${icon}`);

    //append the icon to the animationDiv
    animationDiv.appendChild(iconElement);

    //setting animationDiv keyframe and time animation properties & easing
    animationDiv.style.animation = `${flowArray[Math.floor((Math.random() * 3))]}  ${speed}s linear`;

    //make the icon animation visible
    animationDiv.style.display = 'initial';

    //appending animationDiv to a random column that is in the HTML
    randomColumn.appendChild(animationDiv);

    //when animation is over, remove animationDiv from the DOM
    setTimeout(function() {
        randomColumn.removeChild(animationDiv);
    }, speed * 900)
}
