const express = require('express')
const {engine} = require('express-handlebars')
const handlers = require('../lib/handlers')

const app = express()

const port = process.env.PORT || 3015

app.engine('handlebars', engine({
    extname:'.handlebars',
    defaultLayout:'main'
}))

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'handlebars')

//app.get('/', handlebars.index)

//app.get('/form', handlebars.form)

app.get('/', (req, res) => res.render('index'))

app.engine('handlebars', engine({defaultLayout: 'home'}))


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`+
    '; Press Ctrl + C to exit.....')
})


