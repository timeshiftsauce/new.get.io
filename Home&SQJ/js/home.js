let bg = document.getElementsByClassName("img");
let wz=0;
var zy = 60
for(var i = 0;i<=bg.length-1;i++){
  
  if(i%2==0){
    console.log(zy);
    bg[i].style.cssText="left: "+zy+"px;top: "+(80+wz)+"px";
    
    
  }else{
    bg[i].style.cssText="right: "+zy+"px ;top: "+(80+wz)+"px";
    
    wz = wz + 220
  }
}
let background_img = document.getElementById("boy")
let tc = document.getElementById("skinbox")
let off = document.getElementById("false")
let off_1 = document.getElementById("false-1")
off.onclick = function(){
  tc.style.display = "none"
}
let on = document.getElementById("Txu")
let on_1 = document.getElementById("Txu-1")
on.onclick = function(){
  tc.style.display = "block"
}
on_1.onclick = function(){
  tc.style.display = "block"
}
bg[0].onclick = function () {
  background_img.style.cssText="background: url(https://sqj-4g6cz7m3a12848cc-1310911240.tcloudbaseapp.com/img/bg.jpg) no-repeat center;background-size: cover;background-attachment: fixed;background-color: #bcffac9d;"
}
bg[1].onclick = function () {
  background_img.style.cssText="background: url(https://sqj-4g6cz7m3a12848cc-1310911240.tcloudbaseapp.com/img/bg2.jpg) no-repeat center;background-size: cover;background-attachment: fixed;background-color: #bcffac9d;"
}
bg[2].onclick = function () {
  background_img.style.cssText="background: url(https://sqj-4g6cz7m3a12848cc-1310911240.tcloudbaseapp.com/img/bg3.jpg) no-repeat center;background-size: cover;background-attachment: fixed;background-color: #bcffac9d;"
}
bg[3].onclick = function () {
  background_img.style.cssText="background: url(https://sqj-4g6cz7m3a12848cc-1310911240.tcloudbaseapp.com/img/bg4.jpg) no-repeat center;background-size: cover;background-attachment: fixed;background-color: #bcffac9d;"
}
bg[4].onclick = function () {
  background_img.style.cssText="background: url(https://sqj-4g6cz7m3a12848cc-1310911240.tcloudbaseapp.com/img/bg5.jpg) no-repeat center;background-size: cover;background-attachment: fixed;background-color: #bcffac9d;"
}
bg[5].onclick = function () {
  background_img.style.cssText="background: url(https://sqj-4g6cz7m3a12848cc-1310911240.tcloudbaseapp.com/img/bg6.jpg) no-repeat center;background-size: cover;background-attachment: fixed;background-color: #bcffac9d;"
}
bg[6].onclick = function () {
  background_img.style.cssText="background: url(https://sqj-4g6cz7m3a12848cc-1310911240.tcloudbaseapp.com/img/bg7.jpg) no-repeat center;background-size: cover;background-attachment: fixed;background-color: #bcffac9d;"
}
let nav = document.getElementById("genduo");
let tz = document.getElementById("tuozhang");
tz.style.cssText="display: none; width: 270px"

nav.onclick = function (){
  zy = 10
  wz=0
  tc.style.cssText="display:fixed; width: 650px;left: calc(100vh / 2 - 325px);"
  tz.style.cssText="display: block; position: fixed ;right: 10px; top: 66px; width: 270px; z-index: 23;"
  nav.style.cssText="background: rgb(177, 177, 177);"
  console.log("更多 "+zy+"\
  ");
  for(var i = 0;i<=bg.length-1;i++){
  
    if(i%2==0){
      console.log(zy);
      bg[i].style.cssText="left: "+zy+"px;top: "+(80+wz)+"px";
      
      
    }else{
      bg[i].style.cssText="right: "+zy+"px ;top: "+(80+wz)+"px";
      
      wz = wz + 220
    }
  }
  
}

  off_1.onclick = function(){
    wz=0
    zy = 60
    tc.style.cssText=""
    tz.style.cssText="display: none;"
    nav.style.cssText=""
    for(var i = 0;i<=bg.length-1;i++){
  
      if(i%2==0){
        console.log(zy);
        bg[i].style.cssText="left: "+zy+"px;top: "+(80+wz)+"px";
        
        
      }else{
        bg[i].style.cssText="right: "+zy+"px ;top: "+(80+wz)+"px";
        
        wz = wz + 220
      }
    }
    
  }