import ProductList from "../components/ProductList";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container sx={{ padding: 8 }}>
      <ProductList />
    </Container>
  );
};

export default App;
