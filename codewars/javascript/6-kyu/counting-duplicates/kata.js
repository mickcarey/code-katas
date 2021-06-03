const duplicateCount = text => {
    const checkObj = {};
    let duplicates = 0;

    for (let char of text) {
        if (char.toLowerCase() in checkObj) {
            if (checkObj[char.toLowerCase()] === 1) {
                duplicates++;
            }
            checkObj[char.toLowerCase()]++;
        } else {
            checkObj[char.toLowerCase()] = 1
        }
    }

    return duplicates;
}