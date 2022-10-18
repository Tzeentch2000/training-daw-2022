const assert = require('assert').strict;

function select(array, condition) {
    return array.filter(item => condition(item))
}

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29]

const pairs = value => value%2 === 0
const gt15 = value => value>15
const lt10 = value => value<10

// sólo pares
assert.deepStrictEqual(select(values, pairs), [2])

// mayores que 15
assert.deepStrictEqual(select(values, gt15), [17, 23, 29])

// menores de 10
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7])