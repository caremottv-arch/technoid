window.addEventListener("scroll", function () {

const header = document.querySelector("header");

if(window.scrollY > 80){

header.style.height = "65px";
header.style.boxShadow = "0 10px 25px rgba(0,0,0,.12)";

}else{

header.style.height = "75px";
header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";

}

});