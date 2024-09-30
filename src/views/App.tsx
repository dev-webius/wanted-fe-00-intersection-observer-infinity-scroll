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
  - 최초 로드 시 발생하는 하기 오류 수정
  Warning: Cannot update a component (`ProductList`) while rendering a different component (`Fetcher`).
  To locate the bad setState() call inside `Fetcher`,
  follow the stack trace as described in https://reactjs.org/link/setstate-in-render

TODO 2:
  - README 적절히 작성하기
*/
