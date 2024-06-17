import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductstMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'lorem 01', amount: 2000 },
    { product: 'lorem 02', amount: 1595 },
    { product: 'lorem 03', amount: 2560 },
    { product: 'lorem 04', amount: 2990 },
    { product: 'lorem 05', amount: 3520 },
  ])
})
