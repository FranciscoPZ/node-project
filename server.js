const http = require("http");
const { win32 } = require("path");
const host = "127.0.0.1"
const port = 3000
const url = `http://${host}:${port}/`

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('ola mundo \n meu primeiro script');
})

server.listen(port, host, ()=>{
    console.log(`Server running at http://${host}:${port}`);
})
const open = (process.platform == "darwin"? 'open':
process.platform == 'win32'? 'start':'xdg-open');

require('child_process').exec(open + ' ' + url);