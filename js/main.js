
 var settingmenu = document.querySelector(".setting__menu");
 var darkmode=document.getElementById("dark__mode__btn");
 function settingmenutoggle(){
    settingmenu.classList.toggle("setting__menu__height");

 }

 darkmode.onclick = function (){
    darkmode.classList.toggle("on");
    document.body.classList.toggle("dark__theme");
    if(localStorage.getItem("theme")=="light") {
      localStorage.setItem("theme", "dark");
    }
    else {
      localStorage.setItem("theme","light");
    }
 }
    
 if(localStorage.getItem("theme")=="light") {
   darkmode.classList.remove("on");
   document.body.classList.remove("dark__theme")
 } else if (localStorage.getItem("theme")=="dark" ){
   darkmode.classList.add("on");
   document.body.classList.add("dark__theme");
 } else {
   localStorage.setItem("theme" , "light");
 }