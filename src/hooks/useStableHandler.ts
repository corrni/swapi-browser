import { useCallback, useInsertionEffect, useRef } from 'react'

const throwIfRender = () => {
  throw new Error('Cannot invoke callback during a render!')
}

type StableHandler<Args extends unknown[], R> = (...args: Args) => R

export function useStableHandler<T extends unknown[], ReturnType>(
  handler: StableHandler<T, ReturnType>,
): StableHandler<T, ReturnType> {
  const handlerRef = useRef<StableHandler<T, ReturnType>>(handler)

  handlerRef.current = throwIfRender

  useInsertionEffect(() => {
    handlerRef.current = handler
  })

  return useCallback((...args: T) => handlerRef.current(...args), [])
}
