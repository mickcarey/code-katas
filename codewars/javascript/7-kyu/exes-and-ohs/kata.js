const XO = str => {
    let runningCounter = 0;

    for (const char of str) {
        if (char.toLowerCase() === 'x') {
            runningCounter++;
        } 
        else if (char.toLowerCase() === 'o') {
            runningCounter--;
        }
    }

    return runningCounter === 0;
}