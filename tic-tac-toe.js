var round = 0; //os are starting
var crosses = [];
var os = [];
var winningTable = ["012","345","678","036","147","258","048","246"];

document.addEventListener('click', function(event) {
    var clicked = event.target;
    // validation if click is on board
    if (!clicked.classList.contains('cell')) {
      return;
    }
    // validation if click is on empty cell
    if (clicked.innerText === 'X' || clicked.innerText === 'O') {
        return;
    }
    // adds clicked elements number classes to their result arrays (os and crosses) and adds content
    if (round % 2 === 0) {
        os.push(clicked.className);
        clicked.innerText = 'O';
    } else {
        crosses.push(clicked.className);
        clicked.innerText = 'X';
    }
    // counts round number            
    round += 1;
    // winning condition
    if (round >= 5) {
        var osResult = os.join('').match(/\d+/g).sort().join('');
        var crossesResult = crosses.join('').match(/\d+/g).sort().join('');
        if (winningTable.some(code => osResult.includes(code)) === true) {
            setTimeout(function() { alert('os wins'); window.location.reload(); }, 10);
        } else {
            if ((winningTable.some(code => crossesResult.includes(code))) === true) {
                setTimeout(function() { alert('crosses wins'); window.location.reload(); }, 10);
            }   
            else {
                if (round === 9) {
                    setTimeout(function() { alert('draw'); window.location.reload(); }, 10);
                }
            }
        }   
    }
})