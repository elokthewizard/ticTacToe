ticTacToe = (() => {
    gameboard = (() => {
        const cells = 9;
        const getBoard = [];

        for (let i = 0; i < cells; i++) {
            getBoard[i] = { value: 0 }
        };

        console.log(getBoard);

        const updateDisplay = ((getBoard) => {
            return getBoard;
        });

        return { updateDisplay };

    })();
});