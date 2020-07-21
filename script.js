const newButton = document.querySelector('#new');
const cleanButton = document.querySelector('#clean');
let selection = prompt("How Large Would You Like the Etch-A-Sketch?");
const container = document.querySelector('#container');
container.style.gridTemplateColumns = `repeat(${selection}, 1fr)`;


create();
onHover();

cleanButton.addEventListener('click', function(){
    hover.forEach(function(elem) {
        elem.style.backgroundColor = '#4B0082';
    });
})

newButton.addEventListener('click', function(){
    window.location.reload();
});


function create(){
    selection = selection * selection;
    for(i = 0; i < selection; i++){
        let div = document.createElement('div');
        div.className = 'grid';
        document.querySelector("#container").appendChild(div);
    }
    window.hover = document.querySelectorAll('.grid');
}

function onHover(){
    hover.forEach(function(elem) {
        elem.addEventListener('mouseenter', function() {
            elem.style.backgroundColor = '#FFD700';
        });
    });
}



