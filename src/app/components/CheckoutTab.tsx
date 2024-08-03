import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardContent, Button, IconButton, Typography } from "@mui/joy";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { CartItem } from "./types"; // Correct import
import CreditCardForm from "./CardDetails";
import CheckoutInfo from "./CheckoutInformation";

interface CheckoutProps {
  cart: CartItem[];
  orderTotal: number;
}

export default function Checkout({ cart, orderTotal }: CheckoutProps) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between w-full space-y-4 md:space-y-0 md:space-x-4">
      {/* Credit card form */}
      <div className="w-full md:w-[47.5%]">
        <div className="m-3">
          <CheckoutInfo />
        </div>
      </div>
      <div className="md:w-[%]">
        <div className="m-3">
          <Card
            sx={{
              maxHeight: "max-content",
              maxWidth: "100%",
              mx: "auto",
              // to make the demo resizable
              overflow: "auto",
              resize: "horizontal",
            }}
          >
            <Typography level="title-lg">Checkout Total</Typography>
            <IconButton
              aria-label="bookmark"
              variant="plain"
              color="neutral"
              size="sm"
              sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
            >
              <BookmarkAdd />
            </IconButton>
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              useKeyboardArrows
            >
              {cart.map(
                (
                  item: { imgSrc: string | StaticImport; title: string },
                  index
                ) => (
                  <div key={index}>
                    <Image
                      src={item.imgSrc}
                      alt={item.title}
                      layout="responsive"
                      width={10}
                      height={10}
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
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="w-full md:w-[47.5%]">
        <div className="m-3">
          <CreditCardForm />
        </div>
      </div>
    </div>
  );
}
