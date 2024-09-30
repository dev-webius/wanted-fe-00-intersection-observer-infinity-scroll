export function createCacheResource<T>(fetchFunc: FetchFunction<T>) {
  const map = new Map<Object, Promise<T>>();

  const fetch = (...args: Parameters<typeof fetchFunc>) => {
    const key = JSON.stringify(args);
    if (!map.has(key)) {
      const promise = fetchFunc(...args);
      map.set(key, promise);
    }
    return map.get(key)!;
  };

  return {
    fetch,
  };
}

type FetchFunction<T> = (...args: any[]) => Promise<T>;
export type CacheResource<T> = ReturnType<typeof createCacheResource<T>>;
