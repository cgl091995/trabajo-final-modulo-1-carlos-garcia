
/*
El objetivo de este ejercicio es crear una página web que muestre un header con una imagen seleccionada aleatoriamente y una galería de imágenes generadas dinámicamente. La pagina debe ser responsive

Las imágenes se insertarán dinámicamente desde JavaScript.
La imagen del header también se seleccionará dinámicamente y se cambiará cada vez que se recargue la página.

Define un array de imágenes para el header.

Define otro array con las URLs de las imágenes de la galería y sus descripciones.

Las imágenes se seleccionaran aleatoriamente del array del header y colócala en el <img> del header.

Recorre el array de imágenes de la galería y genera dinámicamente los elementos del DOM (tarjetas de imágenes con sus descripciones).
Agrega las tarjetas al contenedor de la galería en el DOM.*/

/*iniciar
    header mostrar una imagen aleatoria
        acceder al elemento
        funcion
        invocar funcion
        crear array con imagenes
        funcion mostrar imagen random en header
        acceder al atributo
        cambiar valor atributo src
    fin


*/
function cargarImagen(){

    let index = document.getElementById("imagen"); 
    console.log(index)

    const newArray=[
      {
        src:"banners/1.jpg",
        alt:"foto"
      },
      {
        src:"banners/2.jpg",
        alt:"foto"
      },
      {
        src:"banners/3.jpg",
        alt:"foto"
      },
      {
        src:"banners/4.jpg",
        alt:"foto"
      },
      {
        src:"banners/5.jpg",
        alt:"foto"
      },
      {
        src:"banners/6.jpg",
        alt:"foto"
      },  
      {
        src:"banners/7.jpg",
        alt:"foto"
      },
      {

        src:"banners/8.jpg",
        alt:"foto"
      }
        
    ]
    console.log(newArray)
    



        index=Math.round(Math.random()*newArray.length)
        imagen.getAttribute('src')
        document.getElementById('imagen')
        imagen.src=newArray[index].src
                                      
}
        
cargarImagen()

     
 






    





