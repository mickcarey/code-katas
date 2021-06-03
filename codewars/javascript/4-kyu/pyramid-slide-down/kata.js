const longestSlideDown = (pyramid, memo = {},  row = 0, col = 0) => {
    if (pyramid.length === 1) return pyramid[0][0];
    if (memo[`${row}_${col}`]) return memo[`${row}_${col}`];
    
    let firstVal = pyramid[0][0];
    let leftPyramid = pyramid.slice(1).map(val => val.slice(0, val.length-1));
    let rightPyramid = pyramid.slice(1).map(val => val.slice(1));
    
    let leftSum = firstVal + longestSlideDown(leftPyramid, memo, row+1, col);
    let rightSum = firstVal + longestSlideDown(rightPyramid, memo, row+1, col+1);
    
    memo[`${row}_${col}`] = leftSum >= rightSum ? leftSum : rightSum;
    return memo[`${row}_${col}`];
  }