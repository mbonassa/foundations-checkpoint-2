function recSmallestInt (array) {
    if (array[0] === Math.min(...array)) {
        return array[0]
    }
    return recSmallestInt (array.slice(1))
}
