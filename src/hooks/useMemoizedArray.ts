import { useEffect, useRef } from 'react'
import isEqual from 'react-fast-compare'

export function useMemoizedArray<T>(array: T[]) {
  const previousArray = useRef<T[]>()
  const areArraysEqual = isEqual(previousArray.current, array)

  useEffect(() => {
    if (!areArraysEqual) {
      previousArray.current = array
    }
  }, [areArraysEqual, array])

  return areArraysEqual
    ? // KLUDGE: TS inference can't tell that `isEqual` check is always false when
      // the previous array reference is undefined (e.g. during initial render)
      previousArray.current!
    : array
}
