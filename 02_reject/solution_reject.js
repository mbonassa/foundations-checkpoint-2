function reject (array, func) {
    return array.filter(function (x) {return !func(x)})
}