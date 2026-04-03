export const ONE_MIN = 1000 * 60
export const FIVE_MIN = ONE_MIN * 5
export const ONE_HOUR = ONE_MIN * 60
export const ONE_DAY = ONE_HOUR * 24
export const ONE_WEEK = ONE_DAY * 7

export const filmQueryConfig = {
  staleTime: 0,
  gcTime: FIVE_MIN,
  persister: undefined,
}