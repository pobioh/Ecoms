// types.ts
export interface CartItem {
  title: string;
  price: number;
  quantity: number;
  imgSrc: string;
  color?: string; // Allow color to be undefined
  size?: string;
}
