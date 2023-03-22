const express = require('express')
const os = require('os')
const app = express()

app.use('/', async(req, res) => {
    console.log(`sending response ${os.hostname()}`)
    res.json({ message: 'ok it works...', hostname: os.hostname() })
})

app.listen(3000, () => console.log("server on port 3000"))