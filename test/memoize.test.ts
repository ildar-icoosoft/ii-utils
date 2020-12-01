import { memoize } from '../src';
import { of } from 'rxjs';

// @todo. write tests

it('memoize()', done => {
  const fn = jest.fn();
  fn.mockReturnValueOnce(of(1));

  const memoizedFn = memoize(fn);

  memoizedFn().subscribe(res => {
    expect(res).toBe(1);
    done();
  });
});
