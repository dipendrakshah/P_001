const express = require('express')
const {engine} = require('express-handlebars')
const handlers = require('./lib/handlers')

const app = express()

const port = process.env.PORT || 3015

app.get('/',handlers.index)

app.get('/form',handlers.form)

app.engine('handlebars',engine({defaultLayout: 'main'}))

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`+
    '; Press Ctrl + C to exit.....')
})


