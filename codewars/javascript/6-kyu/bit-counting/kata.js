const countBits = (n) => {
    let bits = [];

    while (n > 0) {
        const bit = n % 2;
        const quotient = Math.floor(n / 2);
        bits.unshift(bit);
        n = quotient;
    }

    return bits.filter(bit => bit === 1).length;
};