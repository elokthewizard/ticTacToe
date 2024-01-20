ticTacToe = (() => {

    gameboard = (() => {

        const board = [];
        const rows = 3;
        const columns = 3;

        for (let i = 0; i < rows; i++) {
            board[i] = [];
            for (let j = 0; j < columns; j++) {
                board[i].push({
                    gameSymbol: ''
                })
            }
        };

        createBoard = (() => {

            const newTable = document.createElement("table");
            newTable.setAttribute("id","gameboard");
            document.body.appendChild(newTable);

            const gameTable = document.getElementById("gameboard");

            let l = 0;

            board.forEach((row) => {

                const newRow = document.createElement('tr');
                gameTable.appendChild(newRow).setAttribute('list-num', l++);
                let m = 0;

                row.forEach((cell) => {
                    const newCell = document.createElement('td');
                    newCell.textContent = cell.gameSymbol;

                    newRow.appendChild(newCell).setAttribute('cell-num', m++)
                })
            })
        })();

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

            let currentPlayer = playerList[0];
            let lastPlayer = playerList[1];

            playRound = (x, y) => {
                //check for valid play
                //(board[x][y].gameSymbol !== playerList[1].gameSymbol && board[x][y].gameSymbol == 0) ? board[x][y].gameSymbol = currentPlayer.gameSymbol : console.log('try again');
                board[x][y].gameSymbol = currentPlayer.gameSymbol;
                //check win condition
                (() => {
                    for (let j = 0; j < board.length; j++) {
                        for (let k = 0; k < board[0].length; k++) {
                            // horizontal
                            if (k < board[0].length - 2 && board[j][k + 2]) {
                                if (
                                    board[j][k].gameSymbol === currentPlayer.gameSymbol &&
                                    board[j][k + 1].gameSymbol === currentPlayer.gameSymbol &&
                                    board[j][k + 2].gameSymbol === currentPlayer.gameSymbol
                                ) {
                                    console.log(`${currentPlayer.name} wins horizontally!`);
                                }
                            }
                            // vertical
                            if ((j < board.length - 1 && board[j + 1][k])) {
                                if (
                                    board[j][k].gameSymbol === currentPlayer.gameSymbol &&
                                    board[j + 1][k].gameSymbol === currentPlayer.gameSymbol &&
                                    board[j + 2][k].gameSymbol === currentPlayer.gameSymbol
                                ) {
                                    console.log(`${currentPlayer.name} wins vertically!`);
                                }
                            }
                            // diagonal
                            
                            if (
                                board[0][0].gameSymbol === currentPlayer.gameSymbol &&
                                board[1][1].gameSymbol === currentPlayer.gameSymbol &&
                                board[2][2].gameSymbol === currentPlayer.gameSymbol
                            ) {
                                console.log(`${currentPlayer.name} wins! diagonally`);
                            } else if (
                                board[0][2].gameSymbol === currentPlayer.gameSymbol &&
                                board[1][1].gameSymbol === currentPlayer.gameSymbol &&
                                board[2][0].gameSymbol === currentPlayer.gameSymbol
                            ) {
                                console.log(`${currentPlayer.name} wins! diagonally`);
                            };
                        }
                    }
                })();

                updateDisplay = (() => {
                    console.log(board);

                })();

                //swapPlayer
                (() => {
                    console.log(`${currentPlayer.name} played ${currentPlayer.gameSymbol}`)
                    currentPlayer = currentPlayer.name === 'player1' ? currentPlayer = playerList[1]: currentPlayer = playerList[0];
                    lastPlayer = lastPlayer.name === 'player2' ? lastPlayer = playerList[0]: lastPlayer = playerList[1];
                    console.log(`${currentPlayer.name}, it is now your turn`)
                })();

            };

            addEventListener('click', (e) => {
                console.log(e.target.parentNode.getAttribute('list-num') + ' + ' + e.target.getAttribute('cell-num'));
                if (e.target.gameSymbol === '' && e.target.gameSymbol !== lastPlayer.gameSymbol) {
                    e.target.gameSymbol = currentPlayer.gameSymbol
                }
                playRound(e.target.parentNode.getAttribute('list-num'), e.target.getAttribute('cell-num'));
            })

            return { playRound };
        })();

    })();
})();

