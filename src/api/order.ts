import api from './base'

export async function getOrderList() {
  const res = await api.get('/api/orders')
  return res.data
}

export interface OrderData {
  productId: string
  quantity: number
  price: number
}

export async function createOrder(orderData: OrderData) {
  const res = await api.post('/api/orders', orderData)
  return res.data
}
