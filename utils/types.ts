export interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
}

export interface CartProduct {
  id: number;
  name: string;
  price: number;
  image_url: string;
  quantity: number;
}
