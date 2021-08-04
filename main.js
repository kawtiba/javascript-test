// let variable = null; // a variable

// window.variable = variable; // a new attribute to the window object 


// alert('hello world');
var boutonDanger = document.getElementById('bouton-danger');
// relationship between JS and HTML

// Function definition
function explosion() {
    alert('boom');
}

// add event listener
// boutonDanger.addEventListener('mouseover', explosion);

function battery(elem) {
    console.log(elem.key);

    switch(elem.key) {
        case "a" : 
            switchStyle('red', 5);
            break;

        case "s":
            switchStyle('blue', 10);
            
            break;

        case "d":
            switchStyle('purple', 20)
            break;

        case "f":
            switchStyle('yellow', 100);    
            break;

        case "g": 
            switchStyle('green');
            break;

        default:
            switchStyle('white', 3);
            break;
    } 
}

function switchStyle(color, borderSize = 2) {
    document.body.style = "background: " + color + "; border:" + borderSize + "px solid black";
}

document.addEventListener('keypress', battery);