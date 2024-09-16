let products: Product[] = [];

class Product {
  id: number;
  title: string;
  price: number;
  description: string;

  constructor(id: number, title: string, price: number, description: string) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
  }


  save() {
    const existingProductIndex = products.findIndex(p => p.id === this.id);
    if (existingProductIndex !== -1) {
      products[existingProductIndex] = this;
    } else {
      products.push(this);
    }
  }

  update(updatedData: { title?: string; price?: number; description?: string }) {
    if (updatedData.title) {
      this.title = updatedData.title;
    }
    if (updatedData.price) {
      this.price = updatedData.price;
    }
    if (updatedData.description) {
      this.description = updatedData.description;
    }
    this.save();
  }


  static fetchAll(): Product[] {
    return products;
  }

  static findById(productId: number): Product | undefined {
    return products.find(p => p.id === productId);
  }

  static deleteById(productId: number): void {
    products = products.filter(p => p.id !== productId);
  }
}

export default Product;
