// CheckoutTab.tsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardContent, Button, IconButton, Typography } from "@mui/joy";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { CartItem } from "./types"; // Correct import

interface CheckoutProps {
  cart: CartItem[];
  orderTotal: number;
}

export default function Checkout({ cart, orderTotal }: CheckoutProps) {
  return (
    <Card sx={{ width: 520 }}>
      <div>
        <Typography level="title-lg">Checkout Preview</Typography>
        <IconButton
          aria-label="bookmark"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
      >
        {cart.map(
          (item: { imgSrc: string | StaticImport; title: string }, index) => (
            <div key={index}>
              <Image
                src={item.imgSrc}
                alt={item.title}
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
          )
        )}
      </Carousel>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ${orderTotal.toFixed(2)}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Proceed to Checkout"
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
        >
          Proceed to Checkout
        </Button>
      </CardContent>
    </Card>
  );
}
