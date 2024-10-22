const buttons = document.querySelectorAll('.box');
const body = document.querySelector("body");
console.log(buttons);

buttons.forEach( (btn)=>{
    // console.log(btn);
    btn.addEventListener('click', function(e){ // e is event object
        // console.log(e); // it gives all the info about event
        console.log(e.target); // info about from where the event is taking place
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
    })
} )
