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

/*
TODO 1:
  - 페칭 후 다음 Intersect까지 도달하기 전에 추가 페칭 시도하는 오류 수정

TODO 2:
  - README 적절히 작성하기
*/
