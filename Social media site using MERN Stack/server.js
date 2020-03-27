const express=require("express");


const user=require("./routes/api/user");
const profile=require("./routes/api/profile");
const posts=require("./routes/api/posts");
const app = express();
const mongoose=require("mongoose");
const db=require("./config/keys").mongoURI;

//connect mongodb


mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=> console.log("mongodb connected"))
.catch(err=>console.log(err));


app.get("/",(req,res)=>{
    res.send("hello to homepage")
});

app.use("/api/user",user);
app.use("/api/profile",profile);
app.use("/api/posts",posts);

const port = process.env.PORT || 5000;
app.listen(port , ()=> console.log(`the port listening on ${port}`));