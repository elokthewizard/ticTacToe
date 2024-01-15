ticTacToe = (() => {
    gameboard = (() => {
        const cells = 9;
        const getBoard = [];

        for (let i = 0; i < cells; i++) {
            getBoard[i] = { value: 0 }
        };

        playerList = [
            {
                name: 'player1',
                gameSymbol: 'X'
            }
        ]

        gameController = (() => {

            updateDisplay = () => {
                console.log(getBoard);
            };

            playRound = (index) => {
                getBoard[index].value = playerList[0].gameSymbol;
                updateDisplay();
            };

            return { updateDisplay, playRound };
        })();

    })();
})();