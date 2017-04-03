var currStartingSymbol = false;

var Ttt = (function () {
  var _xWins = 0;
  var _oWins = 0;
  var _draws = 0;
  var currSymbol = 'X',
    grid = [],
    gridWidth = 3,
    restartBtn = document.getElementById('restart-btn'),
    currentX = document.getElementById('current-x'),
    currentO = document.getElementById('current-o'),
    switchStartingPlayerBtn = document.getElementById('switch'),
    currentPlayerText = document.getElementById('currentPlayerText'),
    winList = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  //game function
  var play = function () {
    createGrid();
    drawGrid();
    createStrikes();
    slots = document.getElementsByClassName('slot');
    render();
    moveListener();
    restartListener();
  };

  // Create all possible strikes
  var createStrikes = function () {
    var strikesContainer = document.getElementById('strikes');
    for (var i = 0; i < winList.length; i++) {
      var strike = document.createElement('span');
      strike.className = 'strike';
      strike.id = 'strike' + '-' + winList[i][0] + '-' + winList[i][1] + '-' + winList[i][2];
      strikesContainer.appendChild(strike);
    }
  };
  //restart function
  var restart = function () {
    if (typeof strike != 'undefined') {
      strike.style.visibility = 'hidden';
      strike.style.opacity = 0;

    }!currStartingSymbol ? (currSymbol = 'X', currentO.className = '', currentX.className = 'active') :
      (currSymbol = 'O', currentX.className = '', currentO.className = 'active');

    grid = [];
    createGrid();
    render();
  }
  //restart button listener
  var restartListener = function () {
    restartBtn.addEventListener('click', restart);
  };

  // Put empty items into grid
  var createGrid = function () {
    for (var i = 0; i < gridWidth * gridWidth; i++) {
      grid.push('');
    }
  };

  // Show items in the grid
  var render = function () {
    for (var i = 0; i < slots.length; i++) {
      slots[i].innerHTML = grid[i];
    }
  };

  // Create HTML elements for the grid
  //create slots with empty fields 
  //currentActive symbol needed to determine 
  var drawGrid = function () {
    var currId = 0,
      slotsContainer = document.getElementById('slots');
    var createSlot = function (className, id) {
      var slot = document.createElement('div');
      slot.className = className;
      slot.id = 'slot-' + id;
      slot.dataset.item = '';
      currId++;
      return slot;
    };

    for (var i = 0; i < gridWidth * gridWidth; i++) {
      var slot = createSlot('slot', currId);
      slotsContainer.appendChild(slot);
    }
  };

  //move making
  var moveListener = function () {
    for (var i = 0; i < slots.length; i++) {
      slots[i].addEventListener('click', function () {
        // show made move 
        if (addMove(this)) {
          render();
          // Check winner
          if (winnerChecker.winnerChecker(currSymbol, grid, winList)) {

            currSymbol = 'X' ? (historyModule.xWon(), _xWins = historyModule.getTimesXWon()) :
              (historyModule.oWon(), _oWins = historyModule.getTimesOWon());
            setTimeout(alert("The winner is " + currSymbol), 800);
            return;
          }
          // Check draw
          if (draw()) {
            historyModule.wasDraw();
            var theDiv = document.getElementById("draws");
            _draws = historyModule.getTimesWasDraw();
            setTimeout(alert("Game ended in a tie! "), 800);
            return;
          }
          updateCurrSymbol();
        }
      });
    }
  };

  //returns true when every slot is taken by O or X 
  var draw = function () {
    return (grid.indexOf('') == -1);
  };

  var updateCurrSymbol = function () {
    (currSymbol == 'X') ? (currSymbol = 'O', currentX.className = '', currentO.className = 'active') :
    (currSymbol = 'X', currentO.className = '', currentX.className = 'active');
  };

  var addMove = function (slot) {
    var slotNum = parseInt(getSlotNum(slot.id));
    // Return false when click on non-empty slot
    if (grid[slotNum]) {
      return false;
    }
    // Update grid
    grid[slotNum] = currSymbol;
    return true;
  };
  var getSlotNum = function (slotId) {
    return slotId[slotId.length - 1];
  };

  return {
    play: play,
  };
})();


Ttt.play();

function changeStartingPlayer() {

  currStartingSymbol = !currStartingSymbol;
  var print = '';

  if (currStartingSymbol) {
    print = 'O';
  } else if (!currStartingSymbol) {
    print = 'X';
  }
  currentPlayerText.innerHTML = 'Current starting player: ' + print;
  return currStartingSymbol;
}