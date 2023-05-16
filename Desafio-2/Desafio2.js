const { error } = require("console");
const fs = require("fs");

class Product {
    constructor(){
    title= title;
    description = description;
    price= price;
    thumbnail = thumbnail;
    code = lastcode + 1;
    stock = stock
} }

class ProductManager {
    constructor(){
        this.products= [];
    }

    getProducts() {
        try {
          fs.writeFileSync(`./products.json`,
            JSON.stringify(this.products, null, 2)
          );
        } catch (err) {
            console.warn(err)
           }
        return this.products;
      }

      loadProducts() {
        try {
          const data = fs.readFileSync(`./products.json`);
          return JSON.parse(data);
        } catch (err) {
            console.warn(err)
            return [];
        }
      }
    
      saveProducts() {
        try {
          fs.writeFileSync(
            `./products.json`,
            JSON.stringify(this.products, null, 2)
          );
        } catch (err) {
            console.warn(err)
        }
      }

    getlastProduct (){
        let lastP= this.products[this.products.length - 1]
        return lastP
    }


    addProduct(title, description, price, thumbnail, stock) {
        let lastProduct = this.getlastProduct();
        let lastcode = lastProduct ? lastProduct.code : 0;
    
        let product = new Product(
          title,
          description,
          price,
          thumbnail,
          lastcode + 1,
          stock
        );
        this.products.push(product);
        this.saveProducts();
        return product;
      }
    


      getProductbyId(code) {
        let byId = this.products.find((product) => product.code === code);
        if (!byId) return "No existe el Producto o ID";
        return byId;
      }


updateProduct(id, fieldToUpdate) {
    let productIndex = this.products.findIndex((product) => product.code === id);
    if (!productIndex) return "No existe el Producto o ID";

    this.products[productIndex] = { ...this.products[productIndex], ...fieldToUpdate };
    this.saveProducts();
    return this.products[productIndex];
  }

  deleteProduct(id) {
    let productIndex = this.products.findIndex((product) => product.code === id);
    if (!productIndex) return "No existe el Producto o ID";

    this.products.splice(productIndex, 1);
    this.saveProducts();
    return "Producto eliminado correctamente";
  }
}



