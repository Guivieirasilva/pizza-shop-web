import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { approveOrderMock } from './approve-order-mock'
import { cancelOrderMock } from './cancel-order-mock'
import { deliverOrderMock } from './deliver-order-mock'
import { dispatchOrderMock } from './dispatch-order-mock'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock'
import { getManagerRestaurantMock } from './get-manager-restaurant-mock'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amoun-mock'
import { getMonthOrdersAmountMock } from './get-month-orders-amount.mock'
import { getMonthRevenueOrdersAmountMock } from './get-month-revenue-mock'
import { getOrdersDetailsMock } from './get-orders-details'
import { getOrdersMock } from './get-orders-mock'
import { getPopularProductstMock } from './get-popular-products-mock'
import { getProfileMock } from './get-profile-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'
import { updateProfileMock } from './update-profile-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueOrdersAmountMock,
  getMonthOrdersAmountMock,
  getDailyRevenueInPeriodMock,
  getPopularProductstMock,
  getProfileMock,
  getManagerRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrdersDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') return
  await worker.start()
}
