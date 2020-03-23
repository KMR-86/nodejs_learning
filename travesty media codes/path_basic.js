const path = require("path")

console.log("basename : ",path.basename(__filename))
console.log("directory name : ",path.dirname(__filename))
console.log("parse result :\n",path.parse(__filename))
console.log("parse extention name :\n",path.parse(__filename).ext)
//to create path 
console.log(path.join(__dirname,"test","hello.html"))
