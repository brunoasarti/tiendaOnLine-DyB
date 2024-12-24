// Lista de productos
const productos = [
    {
        prod: "Esmalte Charm Limit Bordo Oscuro",
        id: "Esmalte_23",
        cantidad: 0,
        imagen: "imagenes/CL-bordo20.png",
        descripcion: "Esmalte semipermanente color bordó (23) de 10 ml.",
        precio: 1200

    },
    {
        prod: "Esmalte Charm Limit Bordo Claro",
        id: "Esmalte_102",
        cantidad: 0,
        imagen: "imagenes/CL_Bordo102.jpg",
        descripcion: "Esmalte semipermanente color bordó (102) de 10 ml.",
        precio: 1200

    },
    {
        prod: "Esmalte Charm Limit Verde",
        id: "Esmalte_192",
        cantidad: 0,
        imagen: "imagenes/CL_Green192.jpg",
        descripcion: "Esmalte semipermanente color verde (192) de 10 ml.",
        precio: 1200

    },
    {
        prod: "Esmalte Charm Limit Rosado",
        id: "Esmalte_195",
        cantidad: 0,
        imagen: "imagenes/CL_Pink195.jpg",
        descripcion: "Esmalte semipermanente color Rosado (195) de 10 ml.",
        precio: 1200

    },
    {
        prod: "Esmalte Charm Limit Rosado",
        id: "Esmalte_196",
        cantidad: 0,
        imagen: "imagenes/CL_Pink196.jpg",
        descripcion: "Esmalte semipermanente color Rosado (196) de 10 ml.",
        precio: 1200

    },
    {
        prod: "Esmalte Charm Limit Blanco",
        id: "Esmalte_CL188",
        cantidad: 0,
        imagen: "imagenes/CL_White188.jpg",
        descripcion: "Esmalte semipermanente color Blanco (188) de 10 ml.",
        precio: 1300

    },
    {
        prod: "Esmalte Charm Limit Azul",
        id: "Esmalte_CL171",
        cantidad: 0,
        imagen: "imagenes/CL_Blue171.jpg",
        descripcion: "Esmalte semipermanente color Azul (171) de 10 ml.",
        precio: 1500

    },
    {
        prod: "Ultra Bond Primer Incoloro",
        id: "UltraBondPrimer_1",
        cantidad: 0,
        imagen: "imagenes/UltraBond.jpg",
        descripcion: "Ultra Bondo Primer de 15 ml. de Char Limit.",
        precio: 1800

    }
]

let productosParaHtml = "";
// Creacion de lista desde JS
for(let i = 0; i < productos.length; i++){
    productosParaHtml += `
                        <div class="card" style="width: 18rem;">
                            <img src=${productos[i].imagen} class="card-img-top" alt="Charm Limit 20 10ml">
                            <div class="card-body">
                                <h4 class="card-title">${productos[i].prod}</h4>
                                <p class="card-text">${productos[i].descripcion}</p>
                                <h5 class="price-product">$${productos[i].precio}</h5>

                                <input class="btn-agregarAlCarrito btn btn-primary" type="button" value="Agregar al carrito">
                            </div>
                        </div>
`
}

// Declaracion de variables, constantes
const contenedorProductos = document.getElementById("contenedor");
contenedorProductos.innerHTML = productosParaHtml;
const botonesAgregarProducto = document.querySelectorAll(".btn-agregarAlCarrito");
const listaProductos = document.querySelector("#carrito ul");
const mostrarTotalCarrito = document.querySelector("#carrito p");
const btnBorrar = document.getElementById("btnBorrar");
const btnPagar = document.getElementById("btnPagar");
const mensajeCarrito = document.getElementById("mensaje");
let carritoTotal = 0;

//Funcion de agregar productos
for (let i = 0; i < botonesAgregarProducto.length; i++) {

    botonesAgregarProducto[i].addEventListener("click", function () {

      // Verifico que el producto NO ESTE EN LA LISTA por medio de la identificacion de los ID de cada elemento de la ul.
      const productoExistente = Array.from(listaProductos.children).find((li) => li.dataset.id === i.toString() 
      );


      // Condicion para actualizar contador o para agregar un elemento.
      if (productoExistente) {

        // En caso de ser TRUE se actualiza la cantidad.
        productos[i].cantidad++;
        productoExistente.innerText = `${productos[i].cantidad} Producto: ${productos[i].prod} $${productos[i].precio}`;

      } else {
        
        const productoLi = document.createElement("li"); // En caso de no exisitir se crea un nuevo "li" iniciandola con un contador en 1.
        productoLi.dataset.id = i.toString(); // Asigno el índice como identificador
        productos[i].cantidad = 1;

        productoLi.innerText = `${productos[i].cantidad} Producto: ${productos[i].prod} $${productos[i].precio}`;
        listaProductos.appendChild(productoLi);
      }
  
      carritoTotal += productos[i].precio;
      mostrarTotalCarrito.innerText = `Total: $${carritoTotal}`;
      mensajeCarrito.innerText = "";
    });
  }
  

//Funcion de vaciar el carrito
function vaciarCarrito(){
    listaProductos.innerHTML = "";
    carritoTotal = 0;
    mostrarTotalCarrito.innerHTML = "Carrito vacio";
    mensajeCarrito.innerText = "";
    
}

//Funcion de pagar por los productos
function pagarProductos(){
    if(listaProductos.innerText === ""){
        mensajeCarrito.innerText = "Sin productos seleccionados"
    }else{
        window.location.href="#";
    }
    
}

//Eventos
btnBorrar.addEventListener("click", vaciarCarrito);
btnPagar.addEventListener("click", pagarProductos);
