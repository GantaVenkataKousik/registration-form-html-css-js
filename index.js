const fs=require("fs");
const http=require("http");

var argv = require('minimist')(process.argv.slice(2
    ))

let registrationContent="";
let projectContent="";

const { port } = argv;

fs.readFile("registration_form.html",(err,register)=>{
    if (err){
        throw err;
    }
    registrationContent=register;
})
fs.readFile("project.html",(err,project)=>{
    if (err){
        throw err;
    }
    projectContent=project;
})


http.createServer((req, res) => {
    let url = req.url;
    res.writeHead(200, { "Content-Type": "text/html" });

    switch (url) {
        case "/project":
            res.write(projectContent);
            res.end();
            break;
        default:
            res.write(registrationContent);
            res.end();
            break;
    }
}).listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});