type PromiseStatus = 'pending' | 'fulfilled' | 'rejected';
type ThrowPromise<T> = Promise<T> & {
  status?: PromiseStatus;
  value?: T;
  reason?: any;
};

// Suspense 처리를 위한 함수
// References
// - https://react.dev/reference/react/use
// - https://velog.io/@gyutato/React-Suspense%EA%B0%80-%ED%94%84%EB%9D%BC%EB%AF%B8%EC%8A%A4%EB%A5%BC-%EA%B0%90%EC%A7%80%ED%95%98%EB%8A%94-%EB%B2%95
// - https://blog.openreplay.com/data-fetching-with-suspense-in-react/
// - https://heeheehoho.tistory.com/entry/React-Suspense-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC-%EC%9D%B4%ED%95%B4%EC%99%80-%EC%A7%81%EC%A0%91-%EA%B5%AC%ED%98%84%ED%95%B4-%EB%B3%B4%EA%B8%B0
export function throwSuspense<T = any>(promise: ThrowPromise<T>) {
  if (promise.status === 'fulfilled') {
    return promise.value;
  } else if (promise.status === 'rejected') {
    throw promise.reason;
  } else if (promise.status === 'pending') {
    throw promise;
  } else {
    promise.status = 'pending';
    promise.then(
      value => {
        promise.status = 'fulfilled';
        promise.value = value;
      },
      reason => {
        promise.status = 'rejected';
        promise.reason = reason;
      }
    );
    throw promise;
  }
}