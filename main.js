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
            },
            {
                name: 'player2',
                gameSymbol: 'O'
            }
        ];

        gameController = (() => {

            updateDisplay = () => {
                console.log(getBoard);
            };

            let currentPlayer = playerList[0];

            playRound = (index) => {

                getBoard[index].value = currentPlayer.gameSymbol;

                updateDisplay();

                //swapPlayer 
                (() => {
                    console.log(currentPlayer)
                    currentPlayer = currentPlayer.name === 'player1' ? currentPlayer = playerList[1]: currentPlayer = playerList[0];
                    console.log(currentPlayer)
                })();

            };

            return { updateDisplay, playRound };
        })();

    })();
})();