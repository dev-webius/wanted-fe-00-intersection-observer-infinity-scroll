import React, { useCallback, useState } from "react";
import { Grid2 } from "@mui/material";
import ProductItem from "./ProductItem";
import LoadingSuspense from "./LoadingSuspense";
import { getMockData } from "../fetch/getMockData";
import { createCacheResource } from "../modules/cacheResource";
import { throwSuspense } from "../modules/throwSuspense";
import Intersect from "./Intersect";
import { MockData } from "../types/MockData";

const fetchResource = createCacheResource((page: number) => getMockData(page));

const ProductList = () => {
  const [fetching, setFetching] = useState(false);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([] as MockData[]);
  const [isEnd, setIsEnd] = useState(false);

  const updateData = useCallback((response: Awaited<ReturnType<typeof fetchResource.fetch>>) => {
    const { data, isEnd } = response;
    setIsEnd(isEnd);
    setData(prevData => {
      const newData = data.filter(item =>
        !prevData.some(oldItem => oldItem.productId === item.productId));
      return [...prevData, ...newData];
    });
    setFetching(false);
  }, []);

  // Intersect 감지 > 페이지 증가 > 렌더링 > Fetcher가 페이지 변화 감지 >
  // 데이터 페칭 > Suspense Throw 감지 > 데이터 업데이트 > 렌더링
  const handleIntersect = useCallback(() => {
    setPage(prevPage => prevPage + 1);
    setFetching(true);
  }, []);

  return (
    <>
      <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map(product =>
          <Grid2 key={product.productId} size={{ xs: 2, sm: 4, md: 4 }}>
            <ProductItem key={product.productId} {...product} />
          </Grid2>)}
      </Grid2>
      {!isEnd &&
        <LoadingSuspense>
          <FetcherMemo fetching={fetching} page={page} updator={updateData} handle={handleIntersect} />
        </LoadingSuspense>}
    </>
  );
};

const Fetcher = ({ fetching, page, updator, handle }: FetcherProps) => {
  const data = throwSuspense(fetchResource.fetch(page));
  updator(data!);

  // updator 함수 호출 후 바로 Intersect 컴포넌트가 표시되면서 이중 렌더링 발생
  // 이를 방지하기 위해 fetching 상태를 확인하여 렌더링을 지연시킴
  if (fetching) return null;

  return <Intersect.Div handle={handle} />;
};

// Fetcher 컴포넌트가 무한 렌더링 되는 것을 방지하기 위해 메모이징 적용
const FetcherMemo = React.memo(Fetcher);

export default ProductList;

type FetcherProps = {
  fetching: boolean;
  page: number;
  updator: (data: Awaited<ReturnType<typeof fetchResource.fetch>>) => void;
  handle: () => void;
}
