import { useRef, useLayoutEffect } from 'react';

/**
 * @example
 * const previousValue = usePrevious(value)
 */
function usePrevious<T>(previous: T): T {
  const previousRef = useRef(previous);

  useLayoutEffect(() => {
    previousRef.current = previous;
  });

  return previousRef.current;
}

export { usePrevious };
