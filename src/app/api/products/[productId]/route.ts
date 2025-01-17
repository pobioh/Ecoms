// src/app/api/products/[productId]/route.ts
import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    label: "new",
    price: 56.2,
    quantity: 6,
    imgSrc: "/img/product/6.jpg",
    name: "dummy Product name",
    rating: 3.5,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have be suffered alteration in some form, by injected humou or randomised words which donot look even slightly believable. If you are going to use a passage of Lorem Ipsum   ",
  },
  {
    id: 2,
    label: "new",
    price: 65.5,
    quantity: 4,
    imgSrc: "/img/product/7.jpg",
    name: "another Product name",
    rating: 4,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have be suffered alteration in some form, by injected humou or randomised words which donot look even slightly believable. If you are going to use a passage of Lorem Ipsum   ",
  },
  {
    id: 3,
    label: "sale",
    price: 49.99,
    quantity: 2,
    imgSrc: "/img/product/8.jpg",
    name: "third Product name",
    rating: 4.5,
    description: "Product Details Here",
  },
  {
    id: 4,
    label: "hot",
    price: 89.99,

    quantity: 1,
    imgSrc: "/img/product/9.jpg",
    name: "fourth Product name",
    rating: 5,
    description: "Product Details Here",
  },
  {
    id: 5,
    label: "new",
    price: 79.2,

    quantity: 3,
    imgSrc: "/img/product/10.jpg",
    name: "fifth Product name",
    rating: 3,
    description: "Product Details Here",
  },
  {
    id: 6,
    label: "new",
    price: 79.2,

    quantity: 6,
    imgSrc: "/img/product/1.jpg",
    name: "sixth Product name",
    rating: 3,
    description: "Product Details Here",
  },
  {
    id: 7,
    label: "new",
    price: 79.2,

    quantity: 12,
    imgSrc: "/img/product/2.jpg",
    name: "seventh Product name",
    rating: 3,
    description: "Product Details Here",
  },
];

export async function GET(
  request: Request,
  { params }: { params: { productId: string } }
) {
  const { productId } = params;
  const product = products.find((p) => p.id === parseInt(productId, 10));
  if (product) {
    return NextResponse.json(product);
  } else {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
}
