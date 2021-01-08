const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.get('/dope', (req, res) => {
    res.send('Secret Words')
})

app.get('/greet/:firstname/:lastname', (req, res) => {
    console.log(req.params)
    res.send(`Hello, ${req.params.firstname} ${req.params.lastname}!`)
})

app.get('/add/:x/:y', (req, res) => {
    res.send(`${req.params.x} + ${req.params.y} is equal to ${parseInt(req.params.x) + parseInt(req.params.y)}`)
})

app.get('/queryString', (req, res) => {
    let printout = ''
    console.log(req.query)
    for (let key in req.query) {
        printout += key + ": " + req.query[key] + "<br />"
    }
    res.send('Here ya go: '+ printout)
})

app.get('*', (req, res) => {
    res.send('404 Page not found.')
})



app.listen(3000, () => {console.log('Listening on Port 3000')})