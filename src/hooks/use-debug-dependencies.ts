import { useLayoutEffect } from 'react';
import { usePrevious } from './use-previous';

/**
 * @example
 * useDebugDependencies(
 *   [value1, value2],
 *   ['value1', 'value2']
 * );
 */
function useDebugDependencies(
  dependencies: Array<unknown>,
  dependenciesNames: Array<string>
) {
  const previousDependencies = usePrevious(dependencies);

  useLayoutEffect(() => {
    dependencies.forEach((_, index) => {
      if (dependencies[index] !== previousDependencies[index]) {
        console.log(
          `${dependenciesNames[index]} changed, was: ${previousDependencies[index]}, now: ${dependencies[index]}`
        );
      }
    });
  });
}

export { useDebugDependencies };
