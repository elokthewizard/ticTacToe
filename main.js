ticTacToe = (() => {

    const initBoard = () => {
        const newTable = document.createElement("table");
        newTable.setAttribute("id","gameboard");
        document.body.appendChild(newTable);

        const gameTable = document.getElementById("gameboard");
        const boardData = [];

        const rows = 3;
        const columns = 3;

        for (let i = 0; i < rows; i++) {
            boardData[i] = [];
            for (let j = 0; j < columns; j++) {
                boardData[i].push({ gameSymbol: '' })
            };
        };

        gameTable.addEventListener('click', (e) => {
            console.log(e.target.parentNode.getAttribute('list-num') + '+' + e.target.getAttribute('cell-num'));
            if (e.target.gameSymbol === '' && e.target.gameSymbol !== lastPlayer.gameSymbol) {
                e.target.gameSymbol = currentPlayer.gameSymbol
            }
            playRound(e.target.parentNode.getAttribute('list-num'), e.target.getAttribute('cell-num'));
        })
        console.log("gameboard initialized");
    
        let l = 0;

        boardData.forEach((array) => {

            const newRow = document.createElement('tr');
            gameTable.appendChild(newRow).setAttribute('list-num', l++);
            let m = 0;

            array.forEach((cell) => {
                const newCell = document.createElement('td');
                newCell.textContent = cell.gameSymbol;

                newRow.appendChild(newCell).setAttribute('cell-num', m++)
            })
        })
        console.log("rendered game table");

        return { boardData, gameTable }
    };

    const startGame = initBoard()

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
            
            boardData[x][y].gameSymbol = currentPlayer.gameSymbol;
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
                console.log(boardData);
                console.log(gameTable.value);

                // clear table

                while (gameTable.firstChild) {
                    gameTable.removeChild(gameTable.lastChild)
                }

                boardData.forEach((row) => {

                    const newRow = document.createElement('tr');
                    gameTable.appendChild(newRow).setAttribute('list-num', l++);
                    let m = 0;
        
                    row.forEach((cell) => {
                        const newCell = document.createElement('td');
                        newCell.textContent = cell.gameSymbol;
        
                        newRow.appendChild(newCell).setAttribute('cell-num', m++)
                    })
                })

                // board.forEach((element) => gameTable.appendChild(newRow))
                
            })();

            //swapPlayer
            (() => {
                console.log(`${currentPlayer.name} played ${currentPlayer.gameSymbol}`)
                currentPlayer = currentPlayer.name === 'player1' ? currentPlayer = playerList[1]: currentPlayer = playerList[0];
                lastPlayer = lastPlayer.name === 'player2' ? lastPlayer = playerList[0]: lastPlayer = playerList[1];
                console.log(`${currentPlayer.name}, it is now your turn`)
            })();

        };

        return { playRound };
    })();
})();

