import { Observable, timer } from 'rxjs';
import { share, tap } from 'rxjs/operators';

interface ICache<T> {
  [key: string]: Observable<T>;
}

export interface IMemoizedFunction<T> {
  (...args: any[]): Observable<T>;
}

export const memoize = <T>(
  func: IMemoizedFunction<T>,
  context: any = window,
  rememberTime: number = 500
): IMemoizedFunction<T> => {
  const cache: ICache<T> = {};

  return (...args: any[]): Observable<T> => {
    const cacheKey = JSON.stringify(args);

    cache[cacheKey] =
      cache[cacheKey] || func.apply(context, args).pipe(share());

    return cache[cacheKey].pipe(
      tap(() => timer(rememberTime).subscribe(() => delete cache[cacheKey]))
    );
  };
};
