# 원티드 프리온보딩 FE 사전과제 - 김예승

[데모](https://wanted-fe-00.webius.net/)

* `Intersection Observer`를 이용한 무한 스크롤 구현
* 무한 스크롤 관련 라이브러리 사용 금지
* 비동기 상태 관리 라이브러리 사용 금지 (ex: `tanstack-query`)

## 프로젝트 구성

* React 18 버전
* typescript-CRA 활용하여 프로젝트 생성
* UI 구성을 위해 React MUI 라이브러리 사용

## `src` 구조

### `components` - 재사용 컴포넌트

* `Intersect`: `useIntersect` Hook과 HTMLElement에 ref를 연동 시켜주는 컴포넌트
* `LoadingSuspense`: Loading UI를 표시하는 Suspense 컴포넌트
* `ProductItem`: 상품 정보를 표시하는 컴포넌트
* `ProductList`: 상품 정보를 불러오는 컴포넌트. 여기에 `Intersect`와 `LoadingSuspense` 연결

### `fetch` - 데이터 페칭

* `getMockData`: 상품 목록 페칭 함수 (6개씩 로드하도록 설정)

### `hooks` - Hook 함수

* `useIntersect`: Intersection Observer에 observe/unobserve 처리와 이벤트 리스너 add/remove 처리

### `modules` - 모듈

* `cacheResource`: 데이터 페칭 결과를 캐싱하기 위한 리소스 모듈
* `numberFormatter`: number 타입을 위한 포매터 모듈
* `throwSuspense`: 데이터 페칭 진행 경과를 Suspense에 던지기 위한 모듈, 리액트가 추적할 수 있도록 `cacheResource`와 함께 사용

### `types` - 타입 정의

* `MockData`: 상품 데이터

### `views` - 화면 구성

* `App`: 기본 앱 화면