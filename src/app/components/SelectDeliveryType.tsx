import * as React from "react";
import Switch from "@mui/joy/Switch";
import { Flight, Store } from "@mui/icons-material";

interface DeliveryOptionsProps {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeliveryOptions: React.FC<DeliveryOptionsProps> = ({ dark, setDark }) => {
  return (
    <div className="border-b border-gray-900/10 pb-12">
      <div className="card p-4">
        <center>
          <div className="alert alert-info" role="alert">
            How would you like to get your Item?
          </div>
        </center>
        <br />
        <Switch
          color={dark ? "primary" : "danger"}
          slotProps={{ input: { "aria-label": "delivery mode" } }}
          startDecorator={
            <>
              <small>Pickup</small>
              <Store sx={{ color: dark ? "text.tertiary" : "danger.600" }} />
            </>
          }
          endDecorator={
            <>
              <small>Delivery</small>
              <Flight sx={{ color: dark ? "primary.500" : "text.tertiary" }} />
            </>
          }
          checked={dark}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setDark(event.target.checked)
          }
        />
      </div>
    </div>
  );
};

export default DeliveryOptions;
