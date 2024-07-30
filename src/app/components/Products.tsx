"use client";
import React, { useState } from "react";
import { Apps, Search, ViewList } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Slide,
  Slider,
  Typography,
} from "@mui/material";
import ProductGrid from "../api/FetchProducts";
import Link from "next/link";

export default function AllProducts() {
  const [value, setValue] = useState([10, 5000]);

  const handleChange = (
    event: any,
    newValue: React.SetStateAction<number[]>
  ) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="heading-banner-area overlay-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-banner">
                <div className="heading-banner-title">
                  <h2>ALl Product </h2>
                </div>
                <div className="breadcumbs pb-15">
                  <ul>
                    <li>
                      <Link href="../">Home</Link>
                    </li>
                    <li>Product grid view</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-area pt-10 pb-80 product-style-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-lg-1">
              <aside className="widget widget-search mb-30">
                <form action="#">
                  <input type="text" placeholder="Search here..." />
                  <button type="submit">
                    <Search />
                  </button>
                </form>
              </aside>

              <aside className="card widget widget-categories  mb-30">
                <div className="widget-title">
                  <h4>Categories</h4>
                </div>
                <div
                  id="cat-treeview"
                  className="widget-info product-cat boxscrol2 m-3 p-2"
                >
                  <ul>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                        position: "relative",
                        overflow: "auto",
                        maxHeight: 300,
                        "& ul": { padding: 0 },
                      }}
                      subheader={<li />}
                    >
                      {[0, 1, 2, 3, 4].map((sectionId) => (
                        <li key={`section-${sectionId}`}>
                          <ul>
                            <ListSubheader>{`Category ${sectionId}`}</ListSubheader>
                            {[0, 1, 2].map((item) => (
                              <ListItem key={`item-${sectionId}-${item}`}>
                                <ListItemText primary={`Item ${item}`} />
                              </ListItem>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </List>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="col-lg-9 order-1 order-lg-2 -300">
              <div className="shop-content mt-tab-30 mb-30 mb-lg-0">
                <ProductGrid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
