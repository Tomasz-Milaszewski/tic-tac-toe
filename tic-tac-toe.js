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
    // winning condition
    if (round >= 5) {
        var osResult = os.join('').match(/\d+/g).sort().join('');
        var crossesResult = crosses.join('').match(/\d+/g).sort().join('');
        if (osResult.includes("012") || osResult.includes("345") || osResult.includes("678") || osResult.includes("036") || osResult.includes("147") || osResult.includes("258") || osResult.includes("048") || osResult.includes("246")) {
            setTimeout(function() { alert('os wins'); }, 1);
        } else {
            if (crossesResult.includes("012") || crossesResult.includes("345") || crossesResult.includes("678") || crossesResult.includes("036") || crossesResult.includes("147") || crossesResult.includes("258") || crossesResult.includes("048") || crossesResult.includes("246")) {
                setTimeout(function() { alert('crosses wins'); }, 1);
            }   
            else {
                if (round === 9) {
                    setTimeout(function() { alert('draw'); }, 1);
                }
            }
        }   
    }
})