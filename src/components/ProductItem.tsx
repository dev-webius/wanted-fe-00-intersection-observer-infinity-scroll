import {  Card, CardContent, Typography } from "@mui/material";
import { MockData } from "../types/MockData";
import { toComma } from "../modules/numberFormatter";

const ProductItem = ({ productName, price, boughtDate }: MockData) => {
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
          $ {toComma(price)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
