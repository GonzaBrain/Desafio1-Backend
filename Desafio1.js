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

    getProducts(){
        return this.products
    }

    getlastProduct (){
        let lastP= this.products.pop()
        return lastP
    }


    addProduct(title, description, price, thumbnail, code, stock){
        if (this.products.length === 0) {
            let product = {
                title: title,
                description : description,
                price: price,
                thumbnail : thumbnail,
                code : 1,
                stock : stock
            }
            this.products.push(product);
            return product;
        }
           
        let lastProduct = this.products[this.products.length - 1];
        let lastcode = lastProduct.code;
        let searcher = this.products.find(product => product.code === code);
        
        if(!searcher) { 
            let product = {
                title: title,
                description : description,
                price: price,
                thumbnail : thumbnail,
                code : lastcode + 1,
                stock : stock
            }
            this.products.push(product);
            return product;
        }
                        
        return "Error: ese producto ya existe.";      
    }


getProductbyId(code){
   let byId =  this.products.find(product=> product.code === code)
if(!byId) return "No existe un producto con ese Id"

return byId
}
}