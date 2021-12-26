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

app.post('/speak', function(req, res) {
    speak(req.body.message)
    res.sendFile(path.join(__dirname, '/src/views/home.html'))
})

app.listen(PORT, () => {
    console.log(`\n
    Server listening on port ${PORT}
    Opening browser to: ${BROWSER_URL}
    Press "control" + "c" to quit.\n`)
    setTimeout(() => open(BROWSER_URL), 2000)
})
