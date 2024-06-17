import { http, HttpResponse } from 'msw'

import { GetMonthRevenueResponse } from '../get-month-revenue'

export const getMonthRevenueOrdersAmountMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    receipt: 59000,
    diffFromLastMonth: -40,
  })
})
