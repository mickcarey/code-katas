const arrayDiff = (a, b) => {
    return a.filter(num => b.indexOf(num) === -1)
}