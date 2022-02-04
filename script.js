const grid = document.getElementById("gridContainer")
let color = "black";
let val = 16;

function create(val,color){
    for (let i=0; i < (val*val); i++){
        let square = document.createElement('div');
        square.setAttribute("id", "griditem");
        square.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = `${color}`;
        })
        grid.appendChild(square);
    }
}

/*function for a button to get input and resize (replaced by slider)

function resize(){
    clean();
    val = prompt("please enter the number of squares per side (up to 100, full number only)");
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 1fr); grid-template-rows: repeat(${val}, 1fr);`);
    create(val,color);
}
*/

function randomRGB(){
    var letters = '0123456789ABCDEF';
    color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    changeColor();
}

function clean(){
    let cell = grid.children;
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
}
function whiteout(){
    let cell =grid.children;
    for (let i=0; i < (val*val); i++){
        let square = grid.childNodes[i];
        square.style.backgroundColor = "white";
    }
}

function changeColor(){
    for (let i=0; i < (val*val); i++){
        let square = grid.childNodes[i];
        square.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = `${color}`;
        })
    }
}
function black(){
    color = "black";
}

const slider = document.querySelector('#slider')
slider.addEventListener('input', function(){
    clean();
    val = document.getElementById('slider').value;
    grid.setAttribute('style', `grid-template-columns: repeat(${val}, 1fr); grid-template-rows: repeat(${val}, 1fr);`);
    create(val,color);
})
const pickAColor = document.getElementById("color");
pickAColor.addEventListener('input', function(){
    color = pickAColor.value;
    changeColor();
})

create(16,color);