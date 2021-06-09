const validSolution = board => {
  const col = Array.from({ length: 9 }, () => new Set());
  const grid = Array.from({ length: 9 }, () => new Set());

  for (let i = 0; i < board.length; i++) {
    let gridIndex = i < 3 ? 0 : i < 6 ? 3 : 6;
    if (new Set(board[i]).size !== 9) return false;

    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) return false;

      if (col[j].has(board[i][j])) return false;
      col[j].add(board[i][j]);

      gridIndex += j > 0 && j % 3 === 0 ? 1 : 0;

      if (grid[gridIndex].has(board[i][j])) return false;
      grid[gridIndex].add(board[i][j]);
    }
  }

  return true;
};
