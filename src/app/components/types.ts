import { StaticImport } from "next/dist/shared/lib/get-img-props";

// types.ts
export interface CartItem {
    title: string;
    imgSrc: string | StaticImport;
    price: number;
    quantity: number;
    color: string;
    size: string;
  }
  