ticTacToe = (() => {
    
    gameboard = (() => {

        const cells = 9;
        const rows = 3;
        const columns = 3;

        const board = [];
        const winBoard = [
        [{ value: 'X' }, { value: 'X' }, { value: 'X' }],
        [{ value: 'X' }, { value: 'X' }, { value: 'X' }]
        [{ value: 'X' }, { value: 'X' }, { value: 'X' }]
        ]

        for (let i = 0; i < rows; i++) {
            board[i] = []; 
            for (let j = 0; j < columns; j++) {
                board[i].push({ 
                    value: 0 
                })
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

                (board[x][y].value !== playerList[1].gameSymbol && board[x][y].value == 0) ? board[x][y].value = currentPlayer.gameSymbol : console.log('try again');

                //check win condition
                (() => { 
                    for (let k = 0; k < board[0].length; k++) {
                        if (board[k][0].value == currentPlayer.gameSymbol &&
                            board[k][1].value == currentPlayer.gameSymbol &&
                            board[k][2].value == currentPlayer.gameSymbol) {
                            console.log(`${currentPlayer.name} wins!`);
                        }
                    }
                        
                })();

                updateDisplay();

                //swapPlayer 
                (() => {
                    console.log(`${currentPlayer.name} played ${currentPlayer.gameSymbol}`)
                    currentPlayer = currentPlayer.name === 'player1' ? currentPlayer = playerList[1]: currentPlayer = playerList[0];
                    console.log(`${currentPlayer.name}, it is now your turn`)
                })();

            };

            return { updateDisplay, playRound };
        })();

    })();
})();