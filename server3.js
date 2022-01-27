const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3010

function serveStaticFile(res, path, contentType, responseCode = 200) {
    fs.readFile(__dirname + path, (err, data) => {
        if(err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            return res.end('500 - Internal Error')
        }
    res.writeHead(responseCode, { 'Content-Type': contentType })
    res.end(data)
    })
}

const server = http.createServer((req, res) => {
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
        switch(path) {
            case '':
                serveStaticFile(res, '/pages/index.html', 'text/html')
            break
            case '/form':
                serveStaticFile(res, '/pages/form.html', 'text/html')
            break
            case '/images/logo.jpeg':
                serveStaticFile(res, '/images/logo.jpeg', 'image/jpeg')
            break
            default:
                serveStaticFile(res, '/pages/404.html', 'text/html', 404)
            break
        }
    })
server.listen(port, () => console.log(`server started on port ${port}; ` +
'press Ctrl-C to terminate....'))