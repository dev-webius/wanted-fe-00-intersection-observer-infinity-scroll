import {  Card, CardContent, Typography } from "@mui/material";
import { MockData } from "../types/MockData";

const ProductItem = ({ productName, price, boughtDate }: MockData) => {
  const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5">
          {productName}
        </Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {boughtDate}
        </Typography>
        <Typography variant="h6" sx={{ mt: 1.5, textAlign: 'right' }}>
          $ {formattedPrice}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
