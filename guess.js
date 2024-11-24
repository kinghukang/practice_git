console.log("guess number ")

let number=document.getElementById("number");
let submit=document.getElementById("submit");
let result=document.getElementById("result");
let value = number.value;
console.log(number)
console.log(submit)
console.log(value)

 let a=parseInt(Math.random() * 100);
 console.log(a);
submit.addEventListener("click",function(){
if(value!=""){
    if (value>a){
        result.innerText=("too high")
    }
    else if (value<a){
        result.innerText=("too low")
    }
    else if (value==a){
        result.innerText="you win"
    }
    else{
        result.innerText="Bye Bye"
    }
}else{
    result.innerText="please enter a number"
}
 })