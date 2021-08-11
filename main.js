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

//document.addEventListener('keypress', battery);

document.getElementById("demo").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "GOOD JOB!";
}

// function change() {
//     document.getElementById("exemple").style = "display : block;";
//     setTimeout(() => {
//         document.getElementById("exemple").style = "display : none;";
//     }, 100);

    
// }

// setInterval(() => {
//      change()   
// } , 200)


// function ab(a, b) {
//     return a + b
// }

// (a, b) => {
//     return a + b
// }

// setTimeout(, 2000)

// only as a callback 
// function a wants to execute function b
// in this case function b is a callback to function a


// document.addEventListener('keypress', battery);


function displayRightToLeft(x) {
    for (let index = x.length - 1; index >= 0; index = index - 1 ) {
        console.log(x[index]);
    }
}

function displayLeftToRight(x) {
    for( let index = 0; index < x.length; index = index + 1) {
        console.log(x[index]);
    }
}


let x = [100, 5 , 30 , 40, 1, 3, 1000 ]
let y = [10, 20,30,40,50,60]
// console.log(x);
// function 1 : check if array is ordered

// [1,5,2,3,4,5,6]

// etre ordonner c'est ne pas " etre desordonner"
// exit condition : find one element that is greater than the next element 

function checkIsOrdered(x) {
    // [10,20,30,40,50,60]

    for (let index = 0; index < x.length - 1; index = index + 1) {
        if (x[index] > x[index + 1]) {
            return false;
        }
    }
    return true;
    
}

console.log(x, checkIsOrdered(x))
console.log(y, checkIsOrdered(y))

// function 2 : order an array from small to great
// challenge : swap element value x[1] becomes x[2] and x[2] becomes x[1]

/*
think about : 

1 - initial value 
2 - exit condition ( tant que )
3 - the step 

let index = 5; index < x.length; index = index - 1

pass #1 :
index = 5 
exit condition : index < 0
5 >= 0 ( yes continue ) 
console.log(x[5])
*/