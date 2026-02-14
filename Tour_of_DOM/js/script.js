// console.log("Hello from outside");
// console.log(document);

// CSS in Js

// const sections = document.getElementsByTagName('section')
const sections = document.querySelectorAll('section')
// console.log(sections);
for(const section of sections){
    // console.log(section);
    section.style.backgroundColor = 'lightblue';
    section.style.border = '2px solid green';
    section.style.marginBottom = '20px';
    section.style.borderRadius = '15px';
    section.style.padding = '10px'
}

// Dynamic class
for(const section of sections){
    // section.classList.add('section-card');
}

// document.getElementById('players-container').childNodes[3].childNodes[0].parentNode.parentNode.parentNode.parentNode

// Create element and set innerText or innerHTML
const newChild = document.createElement('li');
newChild.innerText = 'New Born footballer';

// Find the parent where you will add the child
const playerList = document.getElementById('player-list');

// append the child to the parent
playerList.appendChild(newChild)
