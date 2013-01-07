assert = chai.assert

suite('Counter', function () {

    test('starts at zero', function () {
        var counter = new Counter()
        assert.equal(counter, 0)
    })

    test('starts at predefined value', function () {
        var counter = new Counter(3)
        assert.equal(counter, 3)
    })

    test('can perform step', function () {
        var counter = new Counter()
        counter.step()
        assert.equal(counter, 1)
    })

    test('implements toString', function () {
        var counter = new Counter(3)
        assert.strictEqual(counter.toString(), '3')
    })

    test('implements valueOf', function () {
        var counter = new Counter(3)
        assert.strictEqual(counter.valueOf(), 3)
    })

})