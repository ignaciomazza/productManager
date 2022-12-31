const fs = require("fs");
const nombreArchivo = "../DataBase/iphone.json";

class ProductManager {
    constructor () {
        this.products = this.cargarDelArchivo();
        this.product = Product;
    }
    addProduct (product) {
        if (this.getProducts().find((element) => element.code == product.code)){
            console.log("Ya existe un producto con ese codigo")
        }else{
            product.id = this.getProducts().length + 1;
            this.products.push(product);
            this.guardrarCambios();
        }
    }
    getProducts () {
        return this.products;
    }
    getProductsById (id) {
        const productById = this.getProducts().find((element) => element.id == id);
        if (productById == undefined){
            console.log("Ese producto con ese id no existe");
        }else{
            console.log("El producto con ese id es: ", productById);
        }
    }
    guardrarCambios () {
        fs.writeFileSync(nombreArchivo, JSON.stringify(this.products));
    }
    cargarDelArchivo () {
        const productsArchivo = fs.readFileSync(nombreArchivo, "utf-8");
        const productArchivoOBJECT = JSON.parse(productsArchivo);
        return productArchivoOBJECT;
    }
    updateProduct (id, campo, dato){
        const found = this.products.find(element => element.id == id)
        if (campo == "description") {
            found.description = dato
            const nuevoProducts = this.products.filter((item) => item.id !== id)
            nuevoProducts.push(found)
            fs.writeFileSync(nombreArchivo, JSON.stringify(nuevoProducts)); 
            this.products = this.cargarDelArchivo();
        }
        if (campo == "code") {
            found.code = parseInt(dato)
            const nuevoProducts = this.products.filter((item) => item.id !== id)
            nuevoProducts.push(found)
            fs.writeFileSync(nombreArchivo, JSON.stringify(nuevoProducts)); 
            this.products = this.cargarDelArchivo();
        }
        if (campo == "stock") {
            found.stock = parseInt(dato)
            const nuevoProducts = this.products.filter((item) => item.id !== id)
            nuevoProducts.push(found)
            fs.writeFileSync(nombreArchivo, JSON.stringify(nuevoProducts)); 
            this.products = this.cargarDelArchivo();
        }
        if (campo == "price") {
            found.price = parseInt(dato)
            const nuevoProducts = this.products.filter((item) => item.id !== id)
            nuevoProducts.push(found)
            fs.writeFileSync(nombreArchivo, JSON.stringify(nuevoProducts)); 
            this.products = this.cargarDelArchivo();
        }
        if (campo == "rhumbnail") {
            found.thumbnail = dato
            const nuevoProducts = this.products.filter((item) => item.id !== id)
            nuevoProducts.push(found)
            fs.writeFileSync(nombreArchivo, JSON.stringify(nuevoProducts)); 
            this.products = this.cargarDelArchivo();
        }
        if (campo == "title") {
            found.title = dato
            const nuevoProducts = this.products.filter((item) => item.id !== id)
            nuevoProducts.push(found)
            fs.writeFileSync(nombreArchivo, JSON.stringify(nuevoProducts)); 
            this.products = this.cargarDelArchivo();
        }
    }
    deleteProduct (id){
        const nuevoProducts = this.products.filter((item) => item.id !== id)
        fs.writeFileSync(nombreArchivo, JSON.stringify(nuevoProducts)); 
        this.products = this.cargarDelArchivo();
    }
}

class Product extends ProductManager{
    constructor(title, description, price, thumbnail, code, stock){
        super();
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

const newProductManager = new ProductManager();

// newProductManager.addProduct({title: "Iphone 13", description: "Smartphone", price: 800, thumbnail: "iphone13.jpg", code: 6743, stock: 57})
// newProductManager.addProduct({title: "Iphone 14", description: "Smartphone", price: 900, thumbnail: "iphone14.jpg", code: 9045, stock: 99})

// newProductManager.deleteProduct(3)
// newProductManager.updateProduct(1, "price", "1500")

// console.log(newProductManager.getProducts())

module.exports = ProductManager