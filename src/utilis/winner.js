

export const checkWinner = (board) => {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
// loop thorough each possible winning combination
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;

        //check if 
        //1. There is something in board[a] (not null)
        //2. board[a] == board[b]
        //3. board[a] == board[c]


        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return {winner:board[a], combination};
        }
    }

    //if no winner but all cells are filled. its a draw

    if (board.every(cell => cell !== null)) {
        return { winner: "Draw", combination: [] };
    }

    // if the game is still ongoing (no winner, not a draw)
    return null;
}