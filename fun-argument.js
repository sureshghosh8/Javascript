function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}
printInfo("suresh",23);
printInfo("sujoy",24);
//second example
function sum(a=1,b=3){
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
 //this keyword
 const student=
 {name:"suresh",
 age:24
 ,eng:95
 ,math:89,
 phy:75,
 getAvg(){
    let avg=(this.eng+this.math+this.phy)/3;
    console.log(avg);
 }}
//arrow function
const sums=(a,b)=>{
    console.log(a+b);
};
//this with Arrow Functions
const students={
    name:"suresh",
    marks:95,
    prop:this,//global scope
    getName:function(){
        return this.name;
    },
    getMarks:()=>{
        console.log(this);//parent name
        return this.marks;
    },
    getInfo1:function(){
        setTimeout(()=>{
            console.log(this);},2000);
        },
        getInfo2:function(){
            setTimeout(function(){
                console.log(this);},2000);

            },
        };
    //write an arrow function that returns the square of a number 'n'
    const square=(n)=>n*n;
console.log(square(4));
//write a function that prints "hello world" 5 times at intercals of 2s each.
let id=setInterval(()=>{
    console.log("hello world");
},2000);
setTimeout(()=>{
    clearInterval(id);
},10000);
//forEach method
let arr=[1,2,3,4,5];
let print=function(el){
    console.log(el);
};
arr.forEach(print);
//map method
let number=[1,2,3,4];
let double=number.map((el)=>{
    return el*el;
});
//filter method
let nums=[2,4,1,5,6,2,7,8,9];
let ans=nums.filter((el)=>{
    return el<5;
});
//Every method
[2,4,60].every((el)=>el%2==0);
//some meyhod
[1,2,3,4].some((el)=>(el%2==0));
//reduce
let numss=[1,2,3,4];
let finalVal=numss.reduce((res,el)=>res+el);
//check if all numbers in our array are multiples of 10 or not.
let ad=[10,20,30,40];
let and=ad.every((el)=>el%10==0);
console.log(and);
//create a function to find the min number in an array
let min=ad.reduce((min,el)=>{
    if(min<el){
        return min;
    }else{
        return el;
    }
});
console.log(min);
 