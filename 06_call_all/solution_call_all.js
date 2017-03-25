function callAll (object, funcArray) {
    return funcArray.map(function (x) {return x.call(object)})
}