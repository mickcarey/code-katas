const sumTwoSmallestNumbers = numbers => {  
    let lowestNums = (numbers[0] <= numbers[1]) ? [numbers[0], numbers[1]] : [numbers[1], numbers[0]]; 

    for (let i = 2; i < numbers.length; i++) {
        if (numbers[i] < lowestNums[0]) {
            lowestNums[1] = lowestNums[0];
            lowestNums[0] = numbers[i];
        } 
        else if (numbers[i] < lowestNums[1]) {
            lowestNums[1] = numbers[i];
        }
    }

    return lowestNums[0] + lowestNums[1];
}