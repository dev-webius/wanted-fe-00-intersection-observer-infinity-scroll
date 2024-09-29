import { Grid2 } from "@mui/material";
import { MockData } from "../types/MockData";
import ProductItem from "./ProductItem";

type Props = {
  data: MockData[];
};

const ProductList = ({ data }: Props) => {
  return (
    <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      {data.map(product =>
        <Grid2 key={product.productId} size={{ xs: 2, sm: 4, md: 4 }}>
          <ProductItem key={product.productId} {...product} />
        </Grid2>)}
    </Grid2>
  );
};

export default ProductList;