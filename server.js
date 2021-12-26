const express = require('express')
const app = express()
const path = require('path')
const open = require('open')
const { speak } = require('./src/speak')
const PORT = process.env.PORT || 8080
const BROWSER_URL = `http://localhost:${PORT}`

function loggerMiddleware(req, res, next) {
    console.log(`Incoming request to ${req.path}`)
    next()
}

app.use(loggerMiddleware)
app.use(require('body-parser').urlencoded({ extended: true }))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/src/views/home.html'))
})

app.use('/speak', function(req, res) {
    if(req.body.message) {
        speak(req.body.message)
    } else {
        speak('You must type characters to speak!')
    }

    res.sendFile(path.join(__dirname, '/src/views/home.html'))
})

app.listen(PORT, () => {
    // This is where the app is starting
    console.log(`\n
    Server listening on port ${PORT}
    Opening browser to: ${BROWSER_URL}
    Press "control" + "c" to quit.\n`)
    // Add a welcome message
    speak('Hi Rowan!')
    // Open website
    setTimeout(() => open(BROWSER_URL), 2000)
})
