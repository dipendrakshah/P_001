const express = require('express')

const app = express()

const port = process.env.PORT || 3015

app.get('/',(req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`+
    '; Press Ctrl + C to exit.....')
})


