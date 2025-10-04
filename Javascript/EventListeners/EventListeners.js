//  to check the event 

// moniterEvents(document)
function changenText(event){
console.log(event)

let button = document.getElementById('id')
button.textContent= 'Hello '
}

// Envent Listerner 
let button = document.getElementById('id')

button.addEventListener('click',changenText);
// To remove the eventListner
// button.removeEventListener('click',changenText);

let buttons = document.getElementById('google')

buttons.addEventListener('click',function(event){
    event.preventDefault();
    buttons.textContent = 'jii'
});