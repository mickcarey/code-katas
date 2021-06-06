const sumIntervals = intervals => {
    return intervals.reduce((accum, [lower, upper]) => {
        for (let i = 0, j = accum.length - 1; i <= j; i++) {

            // New range starts before existing range
            if (lower < accum[i][0]) {
                if (upper < accum[i][0]) {
                    accum.splice(i,0,[lower,upper]);
                    return accum;
                }

                accum[i][0] = lower;
                return processUpperValue(upper, accum.slice(), i);
            }

            // New range starts inside existing range
            if (lower >= accum[i][0] && lower <= accum[i][1]) {
                return processUpperValue(upper, accum.slice(), i);
            }
        }

        accum.push([lower,upper]);
        return accum;
    }, [])
    .reduce((accum, [lower, upper]) => {
        return accum + (upper - lower);
    }, 0);
}

const processUpperValue = (upper, array, startIndex) => {
    let numToRemove = 0;
    for (let k = startIndex; k <= array.length - 1; k++) {
        numToRemove = k - startIndex;

        if (numToRemove === 0 && upper >= array[k][0] && upper <= array[k][1]) {
            return array;
        }

        if (upper < array[k][0]) {
            array[startIndex][1] = upper;

            if (numToRemove > 0) {
                array.splice(startIndex+1,numToRemove-1);
            }

            return array;
        }

        if (upper >= array[k][0] && upper <= array[k][1]) {
            array[startIndex][1] = array[k][1];

            if (numToRemove > 0) {
                array.splice(startIndex+1,numToRemove);
            }

            return array;
        }
    }

    array[startIndex][1] = upper;

    if (numToRemove > 0) {
        array.splice(startIndex+1,numToRemove);
    }

    return array;
}