function exist(board: string[][], word: string): boolean {

    function dfs(i: number, j: number, idx: number): boolean {
        if (idx === word.length) return true;

        if (
            i < 0 ||
            j < 0 ||
            i >= board.length ||
            j >= board[0].length ||
            board[i][j] !== word.charAt(idx)
        ) {
            return false;
        }

        board[i][j] = '#';

        const found = 
             dfs(i + 1, j, idx + 1) ||
             dfs(i - 1, j, idx + 1) ||
             dfs(i, j + 1, idx + 1) ||
             dfs(i, j - 1, idx + 1);

        board[i][j] = word.charAt(idx);
        return found;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word.charAt(0) && dfs(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};
