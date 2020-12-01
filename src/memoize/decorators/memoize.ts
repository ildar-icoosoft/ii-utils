import { memoize } from '../utils/memoize';

export const Memoize = (rememberTime: number = 500) => {
  return (
    _target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    const originalMethod = descriptor.value;

    let memoizedMethod: Function | undefined;

    descriptor.value = function(...args: any[]) {
      if (!memoizedMethod) {
        memoizedMethod = memoize(originalMethod, this, rememberTime);
      }

      return memoizedMethod!(...args);
    };

    return descriptor;
  };
};
