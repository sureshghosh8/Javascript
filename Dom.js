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