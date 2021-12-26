const { exec } = require('child_process')

function speak(sentence) {
    let programToRun = 'say'
    let command = [programToRun, `"${sentence}"`].join(' ')
    console.log(`Received command to run:\n    ${command}\n`)
    exec(command)
}

module.exports = {
    speak
}
