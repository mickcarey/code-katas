const recoverSecret = triplets => {
    for (let letters of triplets) {
        let last = letters[letters.length - 1];

        if (triplets.every(tuple => tuple.indexOf(last) < 0 || tuple.indexOf(last) === tuple.length-1)) {
            triplets.filter(item => item[item.length-1] === last).forEach(tuple => tuple.pop());
            return recoverSecret(triplets.filter(tuple => tuple.length > 0)) + last;
        }
    }

    return '';
}