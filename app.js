var typed = new Typed(".autotext",{
    strings:["Developer","Youtuber","Cricketer"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
}); 
var typed = new Typed(".autotext2",{
    strings:["Developer","Youtuber","Cricketer"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
}); 

let date = new Date();
let fullYear = date.getFullYear();
document.getElementById('year').innerHTML= fullYear;

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

const button = document.getElementById("arrow");

window.addEventListener("scroll", function() {
  if (window.scrollY < 50) {
    button.style.display = "none";
  } else {
    button.style.display = "block";
  }
});
