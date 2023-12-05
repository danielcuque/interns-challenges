const minMax = (arr) => {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    const response = [min, max]
    return response
}

console.log(minMax([2, 1, 3, 5, 4]))
console.log(minMax([2334454, 5]))
console.log(minMax([1]))