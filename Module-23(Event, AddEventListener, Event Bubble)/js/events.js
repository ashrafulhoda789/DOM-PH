console.log('External File');

// option 2 to event handle

function makeYellow(){
            document.body.style.backgroundColor = 'yellow';
}

function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option 3: get Element by Id and then set onclick
const btnMakeBlue = document.getElementById('btn-make-blue');
        // console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// Option 3: Slidely different
const btnMakePurple = document.getElementById('btn-make-purple');
        
btnMakePurple.onclick = makePurple;

function makePurple(){
    document.body.style.backgroundColor = 'purple';
}