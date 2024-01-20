ticTacToe = (() => {
    
    gameboard = (() => {

        const board = [];
            const rows = 3;
            const columns = 3;

            for (let i = 0; i < rows; i++) {
                board[i] = []; 
                for (let j = 0; j < columns; j++) {
                    board[i].push({ 
                        value: 0 
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
                    newCell.textContent = cell.value;
                    
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

            updateDisplay = () => {
                console.log(board);
                
            };

            let currentPlayer = playerList[0];

            playRound = (x, y) => {
                //check for valid play
                //(board[x][y].value !== playerList[1].gameSymbol && board[x][y].value == 0) ? board[x][y].value = currentPlayer.gameSymbol : console.log('try again');
                board[x][y].value = currentPlayer.gameSymbol;
                //check win condition
                (() => { 
                    for (let k = 0; k < board[0].length; k++) {
                        // horizontal
                        if (
                            board[k][0].value == currentPlayer.gameSymbol &&
                            board[k][1].value == currentPlayer.gameSymbol &&
                            board[k][2].value == currentPlayer.gameSymbol
                            ) {
                                console.log(`${currentPlayer.name} wins!`);
                        // vertical
                        } else if (
                            board[k][0].value == currentPlayer.gameSymbol &&
                            board[k][0].value == currentPlayer.gameSymbol &&
                            board[k][0].value == currentPlayer.gameSymbol
                            ) {
                                console.log(`${currentPlayer.name} wins!`);
                        } else if (
                            board[k][1].value == currentPlayer.gameSymbol &&
                            board[k][1].value == currentPlayer.gameSymbol &&
                            board[k][1].value == currentPlayer.gameSymbol
                            ) {
                                console.log(`${currentPlayer.name} wins!`);
                        } else if (
                            board[k][2].value == currentPlayer.gameSymbol &&
                            board[k][2].value == currentPlayer.gameSymbol &&
                            board[k][2].value == currentPlayer.gameSymbol
                            ) {
                                console.log(`${currentPlayer.name} wins!`);
                        } else if (
                            board[0][1].value == currentPlayer.gameSymbol &&
                            board[1][1].value == currentPlayer.gameSymbol &&
                            board[2][2].value == currentPlayer.gameSymbol
                            ) {
                                console.log(`${currentPlayer.name} wins!`);
                        } else if (
                            board[0][2].value == currentPlayer.gameSymbol &&
                            board[1][1].value == currentPlayer.gameSymbol &&
                            board[2][0].value == currentPlayer.gameSymbol
                            ) {
                                console.log(`${currentPlayer.name} wins!`);
                        } else {
                            break;
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

            addEventListener('click', (e) => {
                console.log(e.target.parentNode.getAttribute('list-num') + ' + ' + e.target.getAttribute('cell-num'));
                if (e.target.value !== 0 && e.target.value !== playerList[1].gameSymbol) {
                    e.target.value = currentPlayer.gameSymbol
                }
                playRound(e.target.parentNode.getAttribute('list-num'), e.target.getAttribute('cell-num'));
            })

            return { updateDisplay, playRound };
        })();

    })();
})();

