const getPINs = observed => {
    const pinArr = observed.split('');
    const store = {};

    let permutationPool = [];

    for (let num of pinArr) {
        if (!store[num]) {
            store[num] = [num, ...getAdjacents(num)];
        }

        permutationPool.push(store[num]);
    }

    let combinations = [];

    for (let i = 0; i < permutationPool.length; i++) {
        let pool = permutationPool[i];
        let comboCount = 1;

        for (let j = i+1; j < permutationPool.length; j++) {
            comboCount *= permutationPool[j].length;
        }

        if (i === 0) {
            for (let num of pool) {
                for (let k = 0; k < comboCount; k++) {
                    combinations.push([num]);
                }
            }
        } else {
            let numPos = 0;

            for (let k = 0; k < combinations.length; k++) {
                if (k !== 0 && k % comboCount === 0) {
                    numPos++;
                }

                if (numPos > pool.length - 1) {
                    numPos = 0;
                }

                combinations[k].push(pool[numPos]);
            }
        }
    }

    return combinations.map(val => val.join(''));
}

const getAdjacents = num => {
    const keyPad =  [[1,2,3],[4,5,6],[7,8,9],[undefined,0,undefined]];
    let adjacents = [];

    for (let i = 0; i < keyPad.length; i++) {
        for (let j = 0; j < keyPad[i].length; j++) {
            if (num == keyPad[i][j]) {
                if (keyPad[i+1] !== undefined) {
                    adjacents.push(keyPad[i+1][j]);
                }

                if (keyPad[i-1] !== undefined) {
                    adjacents.push(keyPad[i-1][j]);
                }

                adjacents.push(keyPad[i][j+1]);
                adjacents.push(keyPad[i][j-1]);
            }
        }
    }

    return adjacents.join('').split('');
}