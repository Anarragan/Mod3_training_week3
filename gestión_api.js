
//get a bases de datos del server simulado
fetch('http://localhost:3000/productos')
.then(response => response.json())
.then(data => console.log("Los productos disponibles son: ", data))
.catch(error => console.error("Error al obtener los productos: ", error));

const newProduct = {id: 4, nombre: "Monitor", precio: 200};

//POST para la insercion de un elemento nuevo
fetch('http://localhost:3000/productos', {
    method:'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newProduct)
})
.then(response => response.json())
.then(data => console.log('Producto agregado: ', data))
.catch(error => console.error("Error al agregar el producto: ",error));

const updateProduct = {nombre: "Laptop",  precio: 1400};

//PUT para la actualizacion de un elemento
fetch('http://localhost:3000/productos/1', {
    method:'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newProduct)
})
.then(response => response.json())
.then(data => console.log('Producto actualizado: ', data))
.catch(error => console.error("Error al actualizar el producto: ",error));


//DELETE para eliminar elementos
fetch('http://localhost:3000/productos/3', {
    method:'DELETE'
}).then(() => console.log("Producto eliminado"))
.catch(error => console.error("Error al eliminar el producto: ", error));

//Funcion que valida los datos ingresados para los productos
function validationProduct(producto){
    if (!producto.nombre || typeof producto.precio !== "number"){
        console.error("Datos del producto no validos.");
        return false;
    }
    return true;
}