// Global variables
let currentIndex = 0;
let bogie = document.getElementsByClassName("Boggie");
let trainsize = 10;
let arr = []
let tunnel = [];
let windowsize = 3;

// Populating the array
for (let i = 0; i < trainsize; i++) {
    arr.push(i)
}

// Generating the window
function generateDiv() {
    //generating the inner html
    if (currentIndex < windowsize) {
        tunnel.push(arr[currentIndex])
    } else if (currentIndex >= trainsize) {
        tunnel.splice(0, 1);
    } else {
        tunnel.splice(0, 1);
        tunnel.push(arr[currentIndex]);
    }
    currentIndex++;
    if (currentIndex >= trainsize) {

    }
    console.log(tunnel)
    if (currentIndex > trainsize + windowsize) {
        currentIndex = 0
    }
    render();
}

// Rendering the window
function render() {
    let render = `<div class =${currentIndex >= trainsize ? "backward" : "Boggie"}>`
    for (let k = 2; k >= 0; k--) {
        render = render + `<div id=\"render\" class =${tunnel[k] === undefined ? "" : " coach"}>${tunnel[k] === undefined ? "" : tunnel[k]} </div>`
    }
    render = render + "</div>"
    let train = document.getElementById("train");
    train.innerHTML = render;
}



function onClick() {
    setInterval(() => generateDiv(), 1000)
}


// t= [1]       
// t=[2,1]
// t=[3,2,1]
// t=[4,3,2]
//  t = [5,4,3]
//  t= [5,4]
// t[5]

