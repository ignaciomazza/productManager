class ProductManager {
    constructor () {
        this.products = []
        this.product = Product
    }
    addProduct (product) {
        if (this.getProducts().find((element) => element.code == product.code)){
            console.log("Ya existe un producto con ese codigo")
        }else{
            product.id = this.getProducts().length + 1;
            this.products.push(product);
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

newProductManager.addProduct({title: "Iphone 11", description: "Smartphone", price: 600, thumbnail: "iphone11.jpg", code: 2367, stock: 34})
newProductManager.addProduct({title: "Iphone 12", description: "Smartphone", price: 700, thumbnail: "iphone12.jpg", code: 8923, stock: 72})
newProductManager.addProduct({title: "Iphone 13", description: "Smartphone", price: 800, thumbnail: "iphone13.jpg", code: 6743, stock: 57})
newProductManager.addProduct({title: "Iphone 14", description: "Smartphone", price: 900, thumbnail: "iphone14.jpg", code: 9045, stock: 99})

console.log(newProductManager.getProducts())

console.log(newProductManager.getProductsById(2))



