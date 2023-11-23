const { response } = require("express");
const fs = require("fs");
var revil = [];

getDateString=()=> {
    const date = new Date();
    var currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return `${year}-${month}-${day}-${hour}-${minutes}-${seconds}` 
}


var data = getDateString();
const date = new Date();
let time = date.getTime();

const express = require("express");   
const app = express();
const PORT = 6000;

fs.writeFile(`./files/${data}.txt`, `Date:${data}Time:${time}`,
 (err) => console.log("Created a text file in a particular Folder"));

fs.readFile(`./files/${data}.txt`, "utf-8", (err, data) => { 
    console.log(data);
    app.get("/", (request, response) => {
        response.send(data);
    });
    app.listen(PORT, () => console.log("Server is running in port", PORT));
}
);

const Store = './files';

fs.readdir(Store, (err, files) => {
   
    files.forEach(file => {
        console.log(file);
        revil.push(file);
    });

});
app.get("/files", (request, response) => {
    response.send(revil);
});
