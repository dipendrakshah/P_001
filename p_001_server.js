const express = require('express')
const {engine} = require('express-handlebars')

const app = express()

const port = process.env.PORT || 3015

app.set('view engine','handlebars')

app.get('/',handlebars.index)

app.get('/form',handlebars.form)

app.get('/', (req, res) => res.render('home'))

app.engine('handlebars',engine({defaultLayout: 'home'}))

app.get('/',(req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`+
    '; Press Ctrl + C to exit.....')
})


