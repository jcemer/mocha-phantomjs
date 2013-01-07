function Counter(index) {
    this.index = index || 0
}

Counter.prototype.valueOf = function () {
    return this.index
}

Counter.prototype.toString = function () {
    return this.index.toString()
}

Counter.prototype.step = function () {
    return ++this.index
}