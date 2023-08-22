export class CartItem {
  id: number;
  price: number;
  name: string;
  img: string;
  quantity: number;
  total: number;

  constructor(product: {
    id: number;
    price: number;
    name: string;
    img: string;
  }, quantity: number) {
    this.id = product.id;
    this.price = product.price;
    this.name = product.name;
    this.img = product.img;
    this.quantity = quantity;
    this.total = this.price * this.quantity;
  }
}