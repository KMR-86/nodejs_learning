const http=require("http")

http.createServer((req,res)=>{
    //console.log(req);
    res.write("hello world")
    res.end();
}).listen(5000,()=>{console.log("server running...");})