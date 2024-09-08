
let myIndex = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
};

function descargarCv(rutaCv) {
  descargarArchivo(rutaCv, 'CurriculumRaquelVillan.pdf');
}

function descargarCartaPresentacion(rutaCarta) {
  descargarArchivo(rutaCarta, 'carta_presentacion.pdf');
}

function descargarArchivo(rutaArchivo, nombreArchivo) {
  let enlace = document.createElement('a');
  enlace.href = rutaArchivo; 
  enlace.download = nombreArchivo;
  enlace.target = '_blank';
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);
};