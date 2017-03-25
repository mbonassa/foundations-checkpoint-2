function threeTimes (func) {
var counter = 0
    return inner = function () {
    counter++
        if (counter < 4) {
        return func()
        }
    }
}