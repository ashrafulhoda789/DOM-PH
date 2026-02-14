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


// Append 
/**
 * Parent node
*/

// 1. parent node
const  mainContainer = document.getElementById('main-container');
// console.log(mainContainer);

//2. Create child node
const placesSection = document.createElement('section');

// create h1
const h1 = document.createElement('h1');
h1.innerText = 'Places I want to visit';
placesSection.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'Bandorban';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = "Cox's Bazar";
ul.appendChild(li2);

placesSection.appendChild(ul);

// 3. append placesSection to the mainContainer
mainContainer.appendChild(placesSection);



// Easier to create HTML
const booksSection = document.createElement('section');

booksSection.innerHTML = `
    <h1>Books I need to read</h1>
    <ul>
        <li>Physics</li>
        <li>Chemistry</li>
        <li>Higher Math</li>
    </ul>
`;

mainContainer.appendChild(booksSection);
