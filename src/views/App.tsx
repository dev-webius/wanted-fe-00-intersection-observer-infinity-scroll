import { useState } from "react";
import { getMockData } from "../fetch/getMockData";
import { MockData } from "../types/MockData";

const App = () => {
  const [page, setPage] = useState(0);
  const [mockData, setMockData] = useState<MockData[]>([]);
  const [isEnd, setIsEnd] = useState(false);

  const loadData = async () => {
    console.log('Current Page:', page);
    console.log('Current Data:', mockData);

    const response = await getMockData(page);
    console.log('Response:', response);

    const { datas, isEnd } = response;
    setPage(page + 1);
    setMockData([...mockData, ...datas]);
    setIsEnd(isEnd);
  };

  return <>
    App
    {!isEnd && <button onClick={loadData}>Load</button>}
  </>;
};

export default App;

/*
TODO 1:
  - 로딩 UI 구현하기
  - Mock Data 로드 시 로딩 UI 노출하고 추가 로드 비활성화하기

TODO 2:
  - React MUI 활용하여 UI 디자인하기

TODO 3:
  - Intersection Observer 활용하여 자동 로드 연동하기

TODO 4:
  - README 적절히 작성하기
*/
