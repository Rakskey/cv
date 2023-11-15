
/* const pagina = document.querySelector("#top");

pagina.mousemove = ()=>{
    let photo = document.querySelector("#boxphoto");
    if (photo.src.match("img/fotoslider1.jpg")){
        photo.src="img/foto2.jpg";
    }else if(photo.src.match("img/foto2.jpg")){
        photo.src="img/foto3.jpg";
    }else{
        photo.src="img/fotoslider1.jpg";
    };
    
}; */
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
};