
//variables

const usuario = "admin";
const clave = "admin";
var usuario_correcto = "0";
var clave_correcta = "0";
var intento = "0";



window.alert("Loguearse como admin - admin para comprar");

//ingresar usuario

while(usuario_correcto ==0)
{
let user = prompt("ingrese usuario")
if (user == usuario)
{
   usuario_correcto = 1;
   while(clave_correcta !=1)
   {
      let pass = prompt("ingrese clave")
         if (pass==clave )
         {
            clave_correcta = 1;
            window.alert("Bienvenid@ "+user);



            //-------------------


               
            class Producto{
               constructor(id,nombre,precio){
                   this.id = id
                   this.nombre = nombre
                   this.precio = precio
                   this.cantidad = 0
               }
           
               agregarCantidad(cantidadDeseada){
                   this.cantidad = this.cantidad + cantidadDeseada
               }
           
               descripcion(){
                   return "id: "+this.id+ " nombre: "+this.nombre+ " precio: $"+this.precio+"\n"
               }
           
               descripcionCarrito(){
                   return "id: "+this.id+ " nombre: "+this.nombre+ " precio: $"+this.precio+ " cantidad: "+this.cantidad+"\n"
               }
           }
           
           class Carrito{
               constructor(){
                   this.listaCarrito = []
               }
           
               agregar(productoNuevo){
                   let existe = this.listaCarrito.some(producto => producto.id == productoNuevo.id)
                   if(!existe){
                       this.listaCarrito.push(productoNuevo)
                   }
               }
           
               mostrar(){
                   let descripcionListaCompra = "Carrito: \n\n"
                   this.listaCarrito.forEach( producto => {
                     
                       descripcionListaCompra = descripcionListaCompra + producto.descripcionCarrito()
                   })
                   return descripcionListaCompra
               }
           
               calcularTotal(){
                   return this.listaCarrito.reduce( (total,producto) => total + producto.precio * producto.cantidad ,0)
               }
           }
           
           class ProductoController{
               constructor(){
                   this.listaProductos = []
               }
           
               agregar(producto){
                   this.listaProductos.push(producto)
               }
           
               mostrar(){
                   let descripcionListaProductos = "Productos disponibles\n"
                   this.listaProductos.forEach( producto => {
                       
                       descripcionListaProductos = descripcionListaProductos + producto.descripcion()
                   })
                   return descripcionListaProductos
               }
           
               buscarId(id){
                   return this.listaProductos.find(producto => producto.id == id)
               }
           }
           
           
           const p1 = new Producto(1,"Gaseosa",180)
           const p2 = new Producto(2,"Pan",100)
           const p3 = new Producto(3,"salchichas",600)
           const p4 = new Producto(4,"hamburguesas",700)
           const p5 = new Producto(5,"mayonesa",100)
           
          
           const carrito = new Carrito()
           const controladorP = new ProductoController()
           
           controladorP.agregar(p1)
           controladorP.agregar(p2)
           controladorP.agregar(p3)
           controladorP.agregar(p4)
           controladorP.agregar(p5)
           
           let rta
           
           do{
               
               alert( controladorP.mostrar() )
               
               let id = Number(prompt("ingrese producto a comprar"))
               const producto = controladorP.buscarId(id)
               
               let cantidadDeseada = Number(prompt("Ingrese la cantidad "))
               
               producto.agregarCantidad(cantidadDeseada)
               
               carrito.agregar(producto)
               
               alert( carrito.mostrar() )
           
           
               rta = prompt("Finalizar la compra ('SI' para finalizar)").toLowerCase()
           }while(rta != "si")
           
           
           alert( "El total es de: $"+carrito.calcularTotal() )


            //-------------------

         }
         else{
            alert("Clave Incorrecta");
            intento++;
            
            if(intento == 3)
                  {
                     alert("3ER INTENTO FALLIDO USUARIO BLOQUEADO");
               exit;
            
               //window.alert("algo2");
            }
          
            
         }
   }
}
else{
         alert("Usuario incorrecto");
         
   }



}

