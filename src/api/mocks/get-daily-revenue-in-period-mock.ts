import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { data: '01/02/2024', receipt: 2000 },
    { data: '02/02/2024', receipt: 1595 },
    { data: '03/02/2024', receipt: 2560 },
    { data: '04/02/2024', receipt: 2990 },
    { data: '05/02/2024', receipt: 3520 },
  ])
})
