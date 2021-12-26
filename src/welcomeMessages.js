
const items = [
    'Welcome Rowan, lets get talking!',
    'Welcome Rowan, this message is different',
    'Hi Rowan, merry Christmas!',
    'Hey Rowan, you\'re cool!'
]

function generateRandomNumberBetweenZeroAndTen() {
    let number = Math.round(Math.random() * 10)
    return number 
}

function generateRandomNumberBetweenZeroAndListLength() {
    return Math.round(generateRandomNumberBetweenZeroAndTen() / items.length)
}

function getRandomGreeting() {
    let index = generateRandomNumberBetweenZeroAndListLength()
    return items[index]
}

module.exports = {
    getRandomGreeting
}
