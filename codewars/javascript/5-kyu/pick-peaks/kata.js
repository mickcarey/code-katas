const pickPeaks = arr => {
    let currentPeak = null;
    let currentPeakPos = null;

    const peakObj = {
        pos: [],
        peaks: []
    };

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i-1]) {
            currentPeak = arr[i];
            currentPeakPos = i;
            continue;
        }

        if (currentPeak !== null && arr[i] < currentPeak) {
            peakObj.pos.push(currentPeakPos);
            peakObj.peaks.push(currentPeak);
            currentPeak = currentPeakPos = null;
            continue;
        }
    }

    return peakObj;
}