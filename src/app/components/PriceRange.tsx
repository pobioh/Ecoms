import React, { useState } from "react";
import { Box, Slider, Typography } from "@mui/material";

interface PriceRangeProps {
  onChange: (value: number[]) => void;
}

const PriceRange: React.FC<PriceRangeProps> = ({ onChange }) => {
  const [value, setValue] = useState<number[]>([10, 5000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (Array.isArray(newValue)) {
      setValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <aside className="widget shop-filter mb-30">
      <div className="widget-info">
        <div className="price_filter">
          <div className="price_slider_amount">
            <input type="submit" value="Your range :" />
            <input
              type="text"
              id="amount"
              name="price"
              placeholder="Add Your Price"
              value={`$${value[0]} - $${value[1]}`}
              readOnly
            />
          </div>
          <Box sx={{ width: 300, marginTop: 2 }}>
            <Typography id="range-slider" gutterBottom>
              Price range
            </Typography>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={10}
              max={5000}
              aria-labelledby="range-slider"
            />
          </Box>
        </div>
      </div>
    </aside>
  );
};

export default PriceRange;
