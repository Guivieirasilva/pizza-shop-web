import { http, HttpResponse } from 'msw'

import { getManagedRestaurantResponse } from '../get-manager-restaurant'

export const getManagerRestaurantMock = http.get<
  never,
  never,
  getManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-restaurant-id',
    name: 'Pizza shop',
    description: 'Custom restaurant description',
    managerId: 'custom-user-id',
    createdAt: new Date(),
    updatedAt: null,
  })
})
