//console.dir(document.querySelector("h1"));
//console.dir(document.querySelector("#discription"));
//console.dir(document.querySelector(".oldimage"));
//console.dir(document.querySelectorAll("div a"));
//manipulating attributes
//obj.getAttribute(attr);
//obj.setAttribute(attr,val);
//random color
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
     let h3=document.querySelector("h3");
     let randomColor=getRandomColor();
     h3.innerText= randomColor;
     let div=document.querySelector("div");
     div.style.backgroundColor=randomColor;
     console.log("color updated");

})
function getRandomColor(){
    let red=Math.floor(Math.random() *255);
    let green=Math.floor(Math.random() *255);
    let blue=Math.floor(Math.random() *255);
  let color=`rgb(${red},${green},${blue})`;
  return color;

}
//this in Event Listeners
let bton=document.querySelector("button");
btn.addEventListener("click",function(){
  this.style.backgroundColor="blue";
})
//keyboard Events
let inp=document.querySelector("input");
inp.addEventListener("keydown",function(e){
  console.log(e.key);
  if(e.code=="Arrowup"){  //ArrowUp,ArrowDown,Arrowleft,ArrowRight
    console.log("arrowup");

  }

  console.log("key was pressed");
})
//extract-form data
let form=document.querySelector("form");
form.addEventListener("submit",function(){
  let user=document.querySelector("#user");
  let pass=document.querySelector("#pass")
  console.log(user.value);
  console.log(pass.value);
})
//single Threaded
setTimeout(()=>{
  console.log("apna college");
},2000);
setTimeout(()=>{
  console.log("welcome to the clg");
},2000);
console.log("hello.......");
//Promises

function SaveDb(data){
  return new Promise((sucess, failure) => {
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
      sucess("sucess:data was saved")
    }else{
      failure("failure:weak connection")
    }
    
  });
}
//then()&catch()
saveDb("apna college")
.then(()=>{
  console.log("promise was resolved");

})
.catch(()=>{
  console.log("promise was rejected");
  console.log(request);
})
//refactoring code
h1 =document.querySelector("h1");
function changeColor(color,delay){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    h1.style.color=color;
    resolve("color changed!");
  },delay);
});
  }
  // Await function
  async function demo(){
     await changeColor("red",1000);
     await changeColor("orange",1000);
     await changeColor("green",1000);
     changeColor("blue",1000);


  }
let requestPromise=changeColor("red",2000)
.then(()=>{
  console.log("red color was completed");
  return changeColor("orange",1000);


})
.then(()=>{
  console.log("orange color was completed");
  return changeColor("green",1000);
  

})
.then(()=>{
  console.log("green color was completed");
  return changeColor("blue",1000);
  

})
.then(()=>{
  console.log("green color was completed");
  return changeColor("blue",1000);
  

})
//async function
let demo=async()=>{
  return 5;
};