 const http = require("http");
 const fs = require("fs");
 const PORT = 7000 ;
 const HOSTNAME = "localhost";
 const htmlFile= fs.readFileSync("./index.html","utf-8");

 const server = http.createServer((req , res) => {
    if(req.url === "/about"){
        res.end("<h1>About Page</h1>");
    }
    if(req.url === "/htmlpage"){
        res.end(htmlFile);
    }

 });

server.listen(PORT,HOSTNAME,()=>{
    console.log(`"this server is running on http://${HOSTNAME}:${PORT}"`);
});