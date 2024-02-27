function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}
printInfo("suresh",23);
printInfo("sujoy",24);
//second example
function sum(a,b){
    console.log(a+b);
}
sum(1,2);
sum(145,564);
//gives us the average of 3 numbers
function calAvg(a,b,c){
    let Avg=Math.floor((a+b+c)/3);
    console.log(Avg,"this is agverage");
}
calAvg(2,4,4);
calAvg(2,2,1);
//prints the multiplication of tables
function printTable(n){
    for (let i=n;i<=n*10;i+=n){
        console.log(i);
    }
}
printTable(10);
//return function
function add(a,b){
    return a+b;
}
console.log(sum(sum(4,5),5));
//that returns the sum of numbers from 1 to n

function getSum(n){
    let sum=0;
for(let i=1;i<=n;i++){
    sum=sum+i;
}
return sum;
}
//concatenation of all strings in an array
let str=["hi","hello","bye","!"];
function concat(str){
    let result="";
    for(let i=0;i<str.length;i++){
        result+=str[i];
    }
    return result;
}
//function Scope
let num=54;//global Scope
function calSum(a,b){
    let Sum=a+b;//function Scope
    console.log(Sum);
}
calSum(1,2);
//block scope
for(let i=1;i<=5;i++){
    console.log(i);//block scope
}
console.log(i);
//lexical scope
function outerFun(){
    let x=5;
    let y=6;
    function innerFun(){
        let a=10;
        console.log(x);
        console.log(y);

    }
    console.log(a);
}
//function Expressions
var sum=function(a,b){
    return a+b;
}
//Higher order function
function multipleGreet(funC,count){
    for (let i=1;i<=count;i++){
        funC();
    }
}
let greet=function(){
    console.log("hello");
}
multipleGreet(greet,10);
//returns a functions
 
 
 function oddOrEvenFactory(request){
    if(request=="odd"){
        let odd =function(n)
        {
        console.log(!(n%2==0));
     }
return odd;
    }else if(request=="even"){let even=function(n){
        console.log(n%2==0);
     }
     return even;

    }else{
        console.log("wrong request");
    }
 }