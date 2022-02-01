const http = require ('http')
const port = process.env.PORT || 3010

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end('This is server 1.')
})

server.listen(port, () => console.log(`server started on port ${port};` +
'press Ctrl+C to terminate.....'))