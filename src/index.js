const messages = [
    'Oscar',
    'Bruno',
    'Carlos',
    'Pedro',
    'Ana',
    'Maria',
    'José',
    'João',
    'Pedro '
]

const randomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length)
    console.log(messages[randomIndex])
}

module.exports = { randomMessage }