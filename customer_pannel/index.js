const express=require("express");
const app=express();
const path=require("path");


const port=8080;
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));



app.listen(port,()=>{
  console.log("Server is running at port "+port);
});

app.get("/",(req,res)=>{
  res.send("Server is running");
})

app.get("/login",(req,res)=>{
  res.render("loginpage.ejs");
});

app.get("/signup",(req,res)=>{
  res.render("signUppage.ejs");
});


app.get("/home",(req,res)=>{
  res.render("home.ejs");
});

app.get("/home/:profile",(req,res)=>{
  res.render("profile.ejs");
});

