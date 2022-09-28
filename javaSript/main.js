const productos= [
    {codigo:1,tipo:"gpu",marca:"MSI",Modelo:"GTX3060",Precio:120000},
    {codigo:2,tipo:"monitor",marca:"MSI",Modelo:"27 pulgadas 2ms",Precio:80000},
    {codigo:3,tipo:"gpu",marca:"ASUS",Modelo:"GTX3080",Precio:250000},
    {codigo:4,tipo:"monitor",marca:"Samsung",Modelo:"30 pulgadas curvo",Precio:60000}

];

function nuevoPorducto(codigo,tipo,marca,modelo,precio){

    this.codigo=codigo,
    this.tipo=tipo,
    this.marca=marca,
    this.modelo=modelo,
    this.precio=parseFloat(precio),
    this.detallesGenerales=()=>{console.log("Codigo del producto:"+this.codigo  + "n\Tipo:"+this.tipo+"n\marca:"+this.marca+"n\Modelo:"+this.modelo +"n\Precio:"+this.precio)}
};
function agregarProducto(producto){
    productos.push(producto);
}
// de esta froma agregamos y creamos producto a nuestro array 
agregarProducto(new nuevoPorducto(5,"motherboard","MSI","z-270",50000)); 



const carritoDiv=document.getElementById("div-carrito")
const productosDiv=document.getElementById("div-productos");

/* let carrito=JSON.parse(localStorage.getItem("carrito")); */
let carrito=[];

function creanCard(){
    productos.forEach((el)=>{
        productosDiv.innerHTML+=`
        <div class="card" style="width: 18rem;">
        <div class="card-body dropdown-cente">
          <h5 class="card-title">${el.Modelo}</h5>
          <p class="card-text">${el.marca}</p>
          <button id="btn-agregar${el.codigo}" >AGREGAR</button>
        </div>
      </div>`
    });
    funcinAgregarAlCarrito();   
}

function funcinAgregarAlCarrito(){
    productos.forEach(el=>{
        document.getElementById(`btn-agregar${el.codigo}`).addEventListener("click",()=>{
            pushCarrito(productos);
        })
    })

}
function pushCarrito(producto){
    let existe=carrito.some(el=>el.codigo===producto.codigo);
    if (existe=== false) {
        producto.cantidad=1;
        carrito.push(producto);
        
    } else {
        let producFind= carrito.find(produc=>produc.codigo==producto.codigo);
        producFind.cantidad++
    }
    mostrarCarrito();
}
console.log(carrito)

function mostrarCarrito(){
    carritoDiv.innerHTML="";
    carrito.forEach(el=>{
        carritoDiv.innerHTML+=`
        <div class="card" style="width: 18rem;">
        <div class="card-body dropdown-cente">
          <h5 class="card-title">${el.Modelo}</h5>
          <p class="card-text">${el.marca}</p>
          <button id="btn-quitar${el.codigo}">quitar</button>
        </div>
      </div>`})
    funcinQuitarDelCarrito()
}

function funcinQuitarDelCarrito(){

    carrito.forEach(el=>{
        document.getElementById(`btn-quitar${el.codigo}`).addEventListener("click",()=>{
             let indice = carrito.findIndex(le=>le.codigo===el.codigo)
             carrito.splice(indice,1);

             mostrarCarrito();
             
        })
    })

}

document.getElementById("comprar-cf").addEventListener("click",()=>{
        Swal.fire({
            icon: 'success',
            title: 'COMPRA REALIZADA',
            showConfirmButton: false,
            timer: 1500
          })})
creanCard()




