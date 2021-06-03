const maxSequence = arr => {
    if (arr.length === 0) return 0;

    let maxSumSequence = [];
    let runningSumSequence = [];
    let maxSum = 0;
    let runningSum = 0;

    for (let num of arr) {
        let restartRunningSum = false;
        let updateMaxSum = false;

        if (runningSumSequence.length === 0 && num <= 0) {
            continue;
        } else if (runningSumSequence.length === 0) {
            runningSumSequence.push(num);
            maxSumSequence.push(num);
            maxSum = runningSum = num;
            continue;
        }

        let newRunningSum = runningSum + num;

        if (num > newRunningSum) {
            restartRunningSum = true;
        }

        if (newRunningSum > maxSum) {
            updateMaxSum = true;
        }

        if (restartRunningSum && updateMaxSum) {
            runningSum = maxSum = num;
            runningSumSequence = [num];
            maxSumSequence = [num];
        } else if (restartRunningSum) {
            runningSum = num;
            runningSumSequence = [num];
        } else if (updateMaxSum) {
            runningSum = newRunningSum;
            runningSumSequence.push(num);
            maxSum = runningSum;
            maxSumSequence = [ ...runningSumSequence ];
        } else {
            runningSum = newRunningSum;
            runningSumSequence.push(num);
        }
    }

    return maxSum;
}