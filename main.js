ticTacToe = (() => {
    
    gameboard = (() => {

        const cells = 9;
        const rows = 3;
        const columns = 3;

        const board = [];

        for (let i = 0; i < rows; i++) {
            board[i] = []; 
            for (let j = 0; j < columns; j++) {
                board[i].push({ value: 0 })
            }
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
                console.log(board);
            };

            let currentPlayer = playerList[0];

            playRound = (x, y) => {

                board[x][y].value == 0 && board[x][y] !== playerList[1].gameSymbol ? board[x][y].value = currentPlayer.gameSymbol : false;

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