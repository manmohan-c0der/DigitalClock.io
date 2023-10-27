let hrs=document.getElementById("hrs")
let min=document.getElementById("min")
let sec=document.getElementById("sec")

setInterval(()=>{
let currentTime=new Date();
 let h=currentTime.getHours();
 let m=currentTime.getMinutes();
 let s=currentTime.getSeconds();
 let AMPM="AM"
 if(h>=12){
  AMPM="PM"
 }
 if(h>12){
    h=h-12;
 }
 if(h<10){
    h="0"+h;
 }
 if(m<10){
    m="0"+m;
 } 
 if(s<10){
    s="0"+s;
 }
hrs.innerHTML=h;
min.innerHTML=m;
sec.innerHTML=s;
ampm.innerHTML=AMPM

},1000)