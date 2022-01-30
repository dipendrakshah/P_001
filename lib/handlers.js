exports.index = (req, res) => 
    res.render('index')

exports.form = (req, res) => 
    res.render('form')

exports.notFound = (req, res) => res.render('404')
