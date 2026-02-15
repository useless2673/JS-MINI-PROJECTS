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
console.log(pass.password());