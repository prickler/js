var historyModule = (function(_xWins,_oWins, _draws) {


    var _xWon = function(){
        _xWins++;
    },

    _oWon = function(){
        _oWins++;
    },

    _wasDraw = function(){
        _draws++;
    },

    _getTimesXWon = function(){
        return _xWins;
    },

    _getTimesOWon = function(){
        return _oWins;
    },

    _getTimesWasDraw = function(){
        return _draws;
    }

    return {
        xWon: _xWon,
        oWon: _oWon,
        Draw: _wasDraw,
        getTimesXWon: _getTimesXWon,
        getTimesOWon: _getTimesOWon,
        getTimesWasDraw: _getTimesWasDraw
    }
})();