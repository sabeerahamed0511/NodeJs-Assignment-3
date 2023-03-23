const fs = require("fs");
const http = require("http");

const content = `<h1> Hello World </h1>
<p> This is Sabeer ahamed... </p>`;

fs.writeFileSync("index.html", content);

const myServer = http.createServer((req, res) => {
    res.writeHead(200, {"content-type" : "text/html"});
    fs.readFile("index.html", (err, data) => {
        if(err) {
            console.log("Error : " + err);
            return;
        }
        res.write(data);
        res.end();
    })
})

myServer.listen(4000, err => {
    if(err) {
        console.log("Error : " + err);
    }
    else console.log("Running on port 4000...")
});