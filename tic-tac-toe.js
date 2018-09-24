var round = 0; //os are starting
var crosses = [];
var os = [];

document.addEventListener('click', function(event) {
    var clicked = event.target;
    // validation if click is on board
    if (!clicked.classList.contains('cell')) {
      return;
    }
    // validation if click is on empty cell
    if (clicked.innerText === 'x' || clicked.innerText === 'o') {
        return;
    }
    // adds clicked elements number classes to their result arrays (os and crosses) and adds content
    if (round % 2 === 0) {
        os.push(clicked.className);
        clicked.innerText = 'o';
    } else {
        crosses.push(clicked.className);
        clicked.innerText = 'x';
    }
    // counts round number            
    round += 1;
    console.log(crosses);
    console.log(os);
    var osResult = os.join('');
    console.log(osResult);
    
})