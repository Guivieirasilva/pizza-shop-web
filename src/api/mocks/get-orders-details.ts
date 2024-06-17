import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-orders-details'

export const getOrdersDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '11952415265',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        product: { name: 'Pizza Pepperoni' },
        priceInCents: 1000,
        quantity: 3,
      },
      {
        id: 'order-item-2',
        product: { name: 'Pizza Mussarela' },
        priceInCents: 1200,
        quantity: 2,
      },
    ],
    totalInCents: 5400,
  })
})
