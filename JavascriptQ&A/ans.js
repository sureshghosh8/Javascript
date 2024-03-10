//what is the value of age after this code runs?
let age=23;
age + 2;
//what is the value of avg after this code runs?
let hindi=80;
let eng=90;
let math=100;
let avg=(hindi+eng+math)/3;
//what is the value of each variable in each line of code
let nums=5;
let newNum=num++;
newNum=++num;
//Declare your name as a string and print its length in JS
//let name="suresh";
//name.length
//Declare your first name as a string and print its first character & last character
let name="suresh";
fisrtName[0];
fisrtName.length-1;
//what is the output of following code 
"apnacollge"+123
//Create a traffic light system that shows what to do based on color
let color="green";
if(color=="red"){
    console.log("stop! Light color is red")
}if(color=="yellow"){
    console.log("slow down .light color is yelllow ");

}if(color=="green"){
    console.log("go.light color is green");
}
//create a system to calculate popcorn prices based on the size customer asked for 
let size="xl";
if (size=="xl"){
    console.log("price is rs.250");
}else if(size=="l"){
    console.log("price is rs.200");
}else if(size=="m"){
console.log("price is rs.100");
}else{
    console.log("price is rs.50");
}
//A "good string" is a string that starts with the letter 'a'& has a length>3.write a program to find if a string is good or not.
let str="apple";
if(str[0]==='a' && str.length>3 ){
    console.log("good string");

}else{
    console.log("not a good string");
}
//logical question
let num=12;
if((num%3===0)&&((num+1===15)||(num-1===11))){
    console.log("safe");
}else{
    console.log("unsafe");
}
//use switch statement to print the day of the week using a number variable 'day' with values 1 to 7
let day=1;
switch(day){
    case 1:
    console.log("Monday");
    break;
    case 2:
    console.log("Tuesday");
    break;
    case 3:
    console.log("Wednesday");
    break;
    case 4:
    console.log("Thurasday");
    break;
    case 5:
    console.log("Friday");
    break;
    case 6:
    console.log("Saturday");
    break;
    case 7:
        console.log("Sunday");
        break;
}
//Create a number variable num with some value.Now,print"good" if the number is divisible  by 10 and print "bad" if it not.
let numss=20;
if(num%10==0){
    console.log("good");
}else{
    console.log("bad");
}
//Take the user's name & age as input using prompts.Then return back the following statement to the user as an alert(by subsituting their name & age):name is age years old
let naam=prompt("please enter your name");
let age=prompt("please enter your age");
alert(`$(naam) is $(age) years old.`);
//Write a switch statement to print the months in a quater.
let quater=1;
switch(quater){
    case 1:console.log("january,febuary,march");
    break;
    case 2:console.log("April,May,June");
    break;
    case 3:console.log("july,august,september");
    break;
    case 4: console.log("october,november,december");
    break;
    default:console.log("not a quater");
}
//A string is a golden string if it starts with the character 'A' or 'a' and has a total length greater than 5. for a given string print if it is golden or not.
let string="apples";
if((string[0]=='a'||start[0]=='A')&&(string.length>5))
{
    console.log("golden string");
}else{
    console.log("not a golden string");
}
// write a program to find the largest of 3 numbers.
let a=5;
let b=18;
let c=13;
if(a>b){

if(a>c){
    console.log(a,"is largest");
}else{
    console.log(c,"is largest");
}}
else{if(b>c){
    console.log(b,"is largest");
}else{
    console.log(c,"is largest");
}

}
//Write a program to check if 2 numbers have the same last digit.
let num1=32;
let num2=47852;
if((num1%10)==(num2%10)){
    console.log("numbers have the same last digit which is", num1%10);
}
else{
    console.log("numbers don't have the same last digit");
}
//Separate the "college" part in above string & replace 'I' with 'T' in it.
let clg="college";
clg.slice(4);
clg.slice(4).replace('l','t');
//for the given start of an array,change it to final form using methods
//start:['january','july','march','august']
let months=['january','july','march','august'];
months.shift();
//add june in array
months.unshift("june");
months.unshift("july");
//for the given start of an array,change it to final form using splice.
//start:['january','july','march','august']
months.splice(0,2,"july","june");
//Return the index of the "javascript" from the given array.if it was reversed.
let lang=["c","c++","html","javascript","python","java"];
lang.reverse();
//Create a nested array to show the following tic-tac-toe game state.
let game=[['x',null,'0',],[null,'x','null'],['0',null,'x']];
// Write a JavaScript program to get the first n elements of an array. [n can be any
//positive number].
//For example: for array [7, 9, 0, -2] and n=3
//Print, [7, 9, 0]
let n=3;
let arr=[7,9,0,-7];
let ans=arr.slice(0,n);
console.log(ans);
//Write a JavaScript program to get the last n elements of an array. [n can be any
//positive number].
//For example: for array [7, 9, 0, -2] and n=3
//Print, [9, 0, -2]
let n=3;
let arr=[7,9,0,-2];
let ans=arr.slice(arr.length-n);
console.log(ans);
//Write a JavaScript program to check whether a string is blank or not.
let str=prompt("please enter a string");
if(structuredClone.length==0){
    console.log("string is empty");
}
else{
    console.log("string is not empty");
}
//Write a JavaScript program to test whether the character at the given (character) index is lower case.
let str="ApNaCoLlEgE";
let idx=3;
if (str[idx]==str[idx].toLowerCase()){
    console.log("character is not lowercase");
}else{
    console.log("character is not lowercase");
}
//Write a JavaScript program to strip leading and trailing spaces from a string.
let str=prompt("please enter a string");
console.log(`original string=${str}`);
console.log(`string without spaces=${str.trim()}`);
//Write a JavaScript program to check if an element exists in an array or not.
let arr=["hello",'a',23,64,99,-6];
let item=64;
if(arr.indexOf(item)!=-1){
    console.log("element exists in array");
}else{
    console.log("element doesn't exits in array");
}
//Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
//Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
//Result should be arr = [1, 3, 4, 5, 6, 3]
let arr=[1,2,3, 4, 5, 6, 2, 3];
let num=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);