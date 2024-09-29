import { Box, Card } from "@mui/material";
import { MockData } from "../types/MockData";

const ProductItem = ({ productId, productName, price, boughtDate }: MockData) => {
  return (
    <Card>
      <Box>Product ID: {productId}</Box>
      <Box>Product Name: {productName}</Box>
      <Box>Price: {price}</Box>
      <Box>Bought Date: {boughtDate}</Box>
    </Card>
  );
};

export default ProductItem;
