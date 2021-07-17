const express = require("express");
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000;

const app = express();

const staticPath = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");
app.set('view engine','hbs');

app.set('views',template_path);

//registers pARTIALS
hbs.registerPartials(partials_path)
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
   res.render('index');   
});

app.get("/about",(req,res)=>{
      res.render('about');
});

app.get("/weather",(req,res)=>{
      res.render('weather');
});

//for error page
app.get("*",(req,res)=>{
      res.render('error',{
            
                  errorMessage:"Oops Page Not Found !"});
});

app.listen(port,()=>{
    console.log(`listening on port ${port}.....`);
})