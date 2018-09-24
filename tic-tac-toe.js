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
    if (clicked.classList.contains('os') || clicked.classList.contains('crosses')) {
        return;
    }
    // adds clicked elements number classes to their result arrays (os and crosses) and adds style classes
    if (round % 2 === 0) {
        clicked.classList.add('os');
        os.push(clicked.className);
    } else {
        clicked.classList.add('crosses');
        crosses.push(clicked.className);
    }
    // counts round number            
    round += 1;
    console.log(crosses);
    console.log(os);
})