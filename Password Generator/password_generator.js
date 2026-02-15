class PasswordGenerator{
    constructor(){
this.lower="abcdefghijklmnopqrstuvwxyz";
this.upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
this.number="0123456789";
this.symbol="!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    password(){
let low=Math.floor(Math.random()*this.lower.length);
let upp=Math.floor(Math.random()*this.upper.length);
let num=Math.floor(Math.random()*this.number.length);
let sym=Math.floor(Math.random()*this.symbol.length);
let password=this.lower[low]+this.upper[upp]+this.number[num]+this.symbol[sym];
return this.shufflepassword(password);
    }
    shufflepassword(password){
    return password.split('')
    .sort(()=>Math.random()-0.5)
    .join('');
    }
}
let pass=new PasswordGenerator();
function generatePassword(){
    let value=pass.password();
    let password=document.getElementById("password");
    password.value=value;
    console.log(value);
}
let button=document.getElementById("gen");
button.addEventListener("click",generatePassword);
//can use FISHER-YATES ALGORITHM 
//can use KNUTH SHUFFLE ALGORITHM
//can take length of password from user and generate password accordingly