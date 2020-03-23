const fs=require("fs")
const path=require("path")


//create folder
/*fs.mkdir(path.join(__dirname,"test"),{},function(err){
    if(err) throw err;
    console.log("folder created .... ");
})*/

//write file

fs.writeFile(path.join(__dirname,"test","test.txt"),"hello world. \ni love nodejs",function(err){
    if(err) throw err;
    console.log("file written .... ");
})
//append in file
fs.appendFile(path.join(__dirname,"test","test.txt"),"\ni finally know how to work with files with nodejs",function(err){
    if(err) throw err;
    console.log("file appended .... ");
})

//read file
fs.readFile(path.join(__dirname,"test","test.txt"),"utf8",function(err,data){
    if(err) throw err;
    console.log("file content:\n",data);
})

//rename file
fs.rename(path.join(__dirname,"test","test.txt"),path.join(__dirname,"test","test2.txt"),function(err){
    if(err) throw err;
    console.log("file renamed...");
})