// some commands 

const { createElement } = require("react")

// window.open()
// window.close()

// alert("Hello!");

document.getElementById('id')
document.getElementsByClassName('class')
document.getElementsByTagName('div')
document.querySelector('#id')
document.querySelector('.class')
document.querySelectorAll('.class')
$0

let button = document.querySelector('.class');
button.innerHTML='heloo'
button.outerHTML='heloo'
button.textContent

let fHeading = createElement('h1')
fHeading = 'I am a heading'

fHeading.textContent= ' I am a paragraph'

let bodytag = document.querySelector('body')
body =document.appendChild(); // Insert at last

// Insert at customized position 

body = InsertAdjacentelement('beforebegin', newelement)
body = InsertAdjacentelement('Afterbegin', newelement)
body = InsertAdjacentelement('beforeend', newelement)
body = InsertAdjacentelement('Afterend', newelement)

// remove child

parent.removechild