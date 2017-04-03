var winnerChecker = (function (currSymbol, grid, winList) {


  function win(currSymbol, grid, winList) {

    // Check if current player's moves match with a set in winList
    for (var i = 0; i < winList.length; i++) {
      var hasWinner = true;

      // One unmatched number then skip this set
      for (var j = 0; j < winList[i].length; j++) {
        if (grid[winList[i][j]] != currSymbol) {
          hasWinner = false;
          break;
        }
      }

      // Has a winner if find a complete match
      if (hasWinner) {
        showStrike(winList[i]);
        return true;
      }
    }

    // No match
    return false;
  };
  var showStrike = function (winSet) {
    var strikeId = 'strike' + '-' + winSet[0] + '-' + winSet[1] + '-' + winSet[2];
    strike = document.getElementById(strikeId)
    strike.style.visibility = 'visible';
    strike.style.opacity = 1;
  };   
  return  {        
    winnerChecker:  win,
        
  }

}());