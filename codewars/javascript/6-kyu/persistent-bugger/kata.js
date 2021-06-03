const persistence = num => {
    if (num <= 9) return 0;

    const nums = num.toString().split('');
    return 1 + persistence(nums.reduce((acc,val) => acc * val))
}