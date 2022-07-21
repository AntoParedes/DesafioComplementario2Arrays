/////////////////////////////////////////////
/////// Array con productos en venta ///////
///////////////////////////////////////////

const productosEnVenta = [ 
    {id: 001, nombre:"TV", marca: "BGH", descripcion:"Televisor LED Smart de 32 HD (1366 x 768). Formato de pantalla 16:9. Frecuencia de barrido 60Hz. Radio contraste 1200. Brillo 180 CD/M2. Tiempo de respuesta 8ms Wi Fi", stock: 6, precio: 43900},

    {id: 002, nombre:"Lavarropas automático", marca: "Drean", descripcion:"Clase AA. Cap.6 Kg. Display Led. Carga Autoadaptativa. Sist.Autobalance. 29 Alternativas de lavado. Puerta extra grande. Ciclos especificos de lavado. Antiarrugas. Lavado rapido. Lavado de 1/2 hr. Eco Wash. Hand Wash. Control de temperatura. 600RPM.", stock: 6, precio: 84000},

    {id: 003, nombre:"Celular A22", marca: "Samsung", descripcion: "Celular 5G de 6.6' FHD+ (1080 x 2408) TFT. Procesador Octa Core (2.2 GHz, 2GHz). Camara principal 48 + 5 + 2mp. Digital Zoom hasta 10x. Camara frontal 8mp. Capacidad 128 Gb / RAM 4 Gb.", stock: 6,precio: 58000},

    {id: 004, nombre:"Celular XXX", marca: "Samsung", descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit eius ratione cum, atque quibusdam doloremque, iure repellendus voluptates quos odio exercitationem, deserunt illo aliquid! Beatae est minima rem deleniti voluptatibus.", stock: 6,precio: 60000},

    {id: 005, nombre:"Celular ZZZ", marca: "Motorola", descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit eius ratione cum, atque quibusdam doloremque, iure repellendus voluptates quos odio exercitationem, deserunt illo aliquid! Beatae est minima rem deleniti voluptatibus.", stock: 6,precio: 56000},

    {id: 006, nombre:"Caloventor", marca: "Liliana", descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit eius ratione cum, atque quibusdam doloremque, iure repellendus voluptates quos odio exercitationem, deserunt illo aliquid! Beatae est minima rem deleniti voluptatibus.", stock: 6,precio: 8000},

]

let ingresarNombre = prompt ("ingresá tu nombre")
let ingresarMail = prompt("bienvenida/o " + ingresarNombre + " registrate con tu mail y recibí un 15% exclusivo")
const carrito = []

////////////////////////////////////////////////////////
////////////// Función agregar al carrito //////////////
///////////////////////////////////////////////////////

function agregarAlCarrito(idProducto){
    const producto = productosEnVenta.find((productosEnVenta) => productosEnVenta.id === idProducto);
    if (producto != -1){
    carrito.push(producto);
    console.log(carrito);
    }else{
        console.log("Lo sentimos, no existe el producto :(")
    }
}

agregarAlCarrito(001)
agregarAlCarrito(002) 
agregarAlCarrito(003)
agregarAlCarrito(004)
agregarAlCarrito(001)

///////////////////////////////////////
//////////   funcion para  //////////////
///////// Eliminar producto ////////////
///////////////////////////////////////

function eliminarDelCarrito(idProducto){
const index = carrito.findIndex((producto) => producto.id === idProducto);
if (index != -1){
    carrito.splice(index,1)
    console.log(carrito)
}else{
    console.log ("Tu producto no está en el carrito")
}
}

///////////////////////////////////////
///////// Elimino producto ////////////
///////////////////////////////////////

eliminarDelCarrito(001)
eliminarDelCarrito(010)

////////////////////////////////////////
////////// Filtro productos ////////////
////////////////////////////////////////

let filtrarPorPrecio = productosEnVenta.filter(filtro);

function filtro(productosEnVenta){
if (productosEnVenta.precio <= 9000){
    console.log(productosEnVenta)
    return true
}else{
    return false
}
}
