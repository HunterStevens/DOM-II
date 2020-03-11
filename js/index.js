// Your code goes here


 window.addEventListener('load', () => {
     alert('Welcome to the Fun Bus! This site is not professionaly done yet so please enjoy messing with the beta.');
 });

//grabing All elements
const para = document.querySelectorAll('p');
const mainBod = document.querySelector('body');
const allImg = document.querySelectorAll('img');
const logo = document.querySelector('.logo-heading');
const destinHead = document.querySelectorAll('div.destination h4');
const aLinks = document.querySelectorAll('a');
const destinBTN = document.querySelectorAll('.btn');
const headerSect = document.querySelectorAll('h2');
const placeForHead = document.querySelectorAll('.listHead');

let draggedHeader = null;

document.querySelector('.main-navigation').addEventListener('dblclick', (e) => {
    document.querySelector('.main-navigation').style.backgroundColor = 'red';
    
    setTimeout(function(){
        document.querySelector('.main-navigation').style.backgroundColor = 'white';
    }, 2000);
});

logo.addEventListener('dblclick', () => {
    logo.style.backgroundColor = '#17A2B8';
    event.stopPropagation();
});

Array.from(aLinks).forEach(function(aLinks){
    aLinks.addEventListener('click', () =>{
        event.preventDefault();
    })
})

Array.from(allImg).forEach(function(allImg){
    allImg.addEventListener('mousedown', e => {
        mainBod.style.backgroundImage = `url('${allImg.src}')`;
        allImg.style.display = "none";

        setTimeout(function(){
            mainBod.style.backgroundImage = 'none';
            allImg.style.display = "flex";
        }, 3000)
        
    });
});

//Drag and Drop Event
for(let i = 0; i < headerSect.length; i++){
     const item = headerSect[i];

     item.addEventListener('dragstart', function(){
         draggedHeader = item;
         setTimeout(function(){
             console.log('drag start event');
             item.style.display = 'none';
         }, 0);
     });

     item.addEventListener('dragend', function(){
         setTimeout(function(){
             console.log('drag end event');
             draggedHeader.style.display = 'block';
             draggedHeader = null;
         }, 0);
     });

     for(let j = 0; j < placeForHead.length; j++){
         const list = placeForHead[j];

        list.addEventListener('dragover', (e) => {
            console.log('drag over event.');
            e.preventDefault();
        });

        list.addEventListener('dragenter', (e) => {
            console.log('drag enter event');
            e.preventDefault();
        })

         list.addEventListener('drop', (e) => {
             console.log('drop event');
             list.prepend(draggedHeader);
         });
     }
 }

Array.from(para).forEach(function(para){
    para.addEventListener('mouseover', (e) => {
        para.style.backgroundColor = 'blue';
        para.style.color = 'white';

    });
    para.addEventListener('mouseleave', (e) => {
        para.style.backgroundColor = '#FFEBCD';
        para.style.color = '#212529';
    })
});

Array.from(destinHead).forEach(function(destinHead){
    destinHead.addEventListener('dblclick', () =>{
        destinHead.textContent = 'CLICK THE SIGN UP BUTTON!';
    });

});

Array.from(destinBTN).forEach(function(destinBTN){
    destinBTN.addEventListener('mouseleave', ()=>{
        destinBTN.textContent = 'WAIT! DONT FORGET TO SIGN UP!';
        destinBTN.style.color = 'red';
    });

});

