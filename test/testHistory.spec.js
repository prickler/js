describe('History', function () {
    var history = historyModule;

    beforeEach(function () {
    });

    afterEach(function () {
    });

    it("should be 0", function () {
        var zero = 0;
        var oWins = history.getTimesOWon();
        expect(oWins).toEqual(zero);
    });

    it("should be 1", function () {
        var one = 1;
        history.oWon();
        var oWins = history.getTimesOWon();
        expect(oWins).toEqual(one);
    });

    it("should be 0", function () {
        var zero = 0;
        var xWins = history.getTimesXWon();
        expect(xWins).toEqual(zero);
    });

    it("should be 1", function () {
        var one = 1;
        history.xWon();
        var xWins = history.getTimesXWon();
        expect(xWins).toEqual(one);
    });

    it("should be 0", function () {
        var zero = 0;
        var ties = history.getTimesWasDraw();
        expect(ties).toEqual(zero);
    });

    it("should be 1", function () {
        var one = 1;
        history.Draw();
        var ties = history.getTimesWasDraw();
        expect(ties).toEqual(one);
    });
    ;
})