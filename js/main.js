
/*
El objetivo de este ejercicio es crear una página web que muestre un header con una imagen seleccionada aleatoriamente y una galería de imágenes generadas dinámicamente. La pagina debe ser responsive

Las imágenes se insertarán dinámicamente desde JavaScript.
La imagen del header también se seleccionará dinámicamente y se cambiará cada vez que se recargue la página.

Define un array de imágenes para el header.

Define otro array con las URLs de las imágenes de la galería y sus descripciones.

Las imágenes se seleccionaran aleatoriamente del array del header y colócala en el <img> del header.

Recorre el array de imágenes de la galería y genera dinámicamente los elementos del DOM (tarjetas de imágenes con sus descripciones).
Agrega las tarjetas al contenedor de la galería en el DOM.*/


    const newArray=[
        imagen.src="assets/viajes-1.jpg",
        imagen.src="assets/viajes-2.jpg",
        imagen.src="assets/viajes-3.jpg"
    ]
    console.log(newArray)
    

    function cargarImagen(){
    for(let i=0; i<=3; i++){
    document.imagen.src = newArray[i];
    document.getElementById("imagen"); 
    i=Math.round(Math.random()*3)
    }

       
      
}
        
cargarImagen()

     
    
    imagen = new Image;
    imagen.src = "/imagenes/imagen.jpg"






    





