
const body = document.querySelector('body')

let containerRow = document.createElement('container');
containerRow.id ='grid'
for(let j=0;j<100; j++){

    let containerCol = document.createElement('container');
    containerCol.style.display='flex'

    for(let i=0; i<100; i++){

        let squareDiv= document.createElement('div');
        //assign a class to the squareDiv
        squareDiv.className = 'square';   //square as a class is defined in css
        
        /* Below three lines are alternatives to defining the class in css
        // squareDiv.style.height ="50px";
        // squareDiv.style.width ="50px";
        // squareDiv.style.border = "2px solid black"; */

        containerCol.appendChild(squareDiv);
    }
    containerRow.appendChild(containerCol)
}

let cleanOut = document.createElement('button');
cleanOut.textContent='Clear';

body.appendChild(cleanOut);

body.appendChild(containerRow);
console.log(containerRow)

const divs = Array.from(document.querySelectorAll('.square'));
console.log(divs)

divs.forEach(div => div.addEventListener('mouseover',function(event){
    event.target.style.backgroundColor ='red'
    event.target.style.borderColor='red'
    console.log('you entered!')
}));

function cleanUp(e){
    const divs = document.querySelectorAll('.square');
    divs.style.color = squareDiv.style.height ="50px";
    divs.style.width ="50px";
    divs.style.border = "2px solid black";
    divs.style.backgroundColor = 'white';

}
const btn = document.querySelector('button');
btn.addEventListener('click',function(e){
    console.log(e);
    const grid = document.querySelectorAll('.square');
    console.log(grid)
    grid.forEach(square => {
        square.style.backgroundColor ='white';
        square.style.borderColor ='black'
    });
     
    
    // divs.style.border = "2px solid black";
    // divs.style.backgroundColor = 'white';
});

// const divs = document.querySelectorAll('#grid');
// divs.addEventListener('mouseover',function(event){
//     event.target.style.backgroundColor ='red'
//     console.log('you entered!')
// });




