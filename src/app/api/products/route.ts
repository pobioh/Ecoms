// src/app/api/products.ts
import { NextRequest, NextResponse } from "next/server";

const products = [
  {
    id: 1,
    label: "new",
    price: "$56.20",
    imgSrc: "img/product/6.jpg",
    name: "dummy Product name",
    rating: 3.5,
  },
  {
    id: 2,
    label: "new",
    price: "$65.50",
    imgSrc: "img/product/7.jpg",
    name: "another Product name",
    rating: 4,
  },
  {
    id: 3,
    label: "sale",
    price: "$49.99",
    imgSrc: "img/product/8.jpg",
    name: "third Product name",
    rating: 4.5,
  },
  {
    id: 4,
    label: "hot",
    price: "$89.99",
    imgSrc: "img/product/9.jpg",
    name: "fourth Product name",
    rating: 5,
  },
  {
    id: 5,
    label: "new",
    price: "$79.20",
    imgSrc: "img/product/10.jpg",
    name: "fifth Product name",
    rating: 3,
  },
  {
    id: 6,
    label: "new",
    price: "$79.20",
    imgSrc: "img/product/1.jpg",
    name: "sixth Product name",
    rating: 3,
  },
  {
    id: 7,
    label: "new",
    price: "$79.20",
    imgSrc: "img/product/2.jpg",
    name: "seventh Product name",
    rating: 3,
  },
];

export async function GET() {
  return NextResponse.json(products);
}
