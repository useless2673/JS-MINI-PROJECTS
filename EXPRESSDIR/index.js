const express=require('express');
const app=express();
const path=require('path');
const port=3000;
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.static(path.join(__dirname,'/public/css')));
app.use(express.static(path.join(__dirname,'/public/js')));
app.get('/',(req,res)=>{
    res.render('home');
});
app.get('/dice',(req,res)=>{
    let diceValue=Math.floor(Math.random()*6)+1;
    res.render('diceValue',{diceValue});
});
app.get('/insta/:user',(req,res)=>{
    let {user}=req.params;
    let instaData=require('./data.json');
    let data=instaData[user];
    if(data){
    res.render('insta',{data});
    }
    else{
        res.render('error');
    }
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
/*app.use((req,res)=>{
    console.log('Hello World!');
    res.send('<h1>Hello World!</h1>');
});
app.get('/:username/:id',(req,res)=>{
  //  console.log(req.params);
  let {username,id}=req.params;
  res.send(`<h1>Hello ${username} with ID ${id}!</h1>`);
});
console.dir(app);*/