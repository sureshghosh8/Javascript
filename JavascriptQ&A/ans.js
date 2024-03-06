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