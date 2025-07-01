import api from './base'

// 订单车辆信息
export interface OrderVehicle {
  id: number
  title: string
  imageUrl: string
}

// 订单信息
export interface Order {
  id: number
  vehicle: OrderVehicle
  buyerName: string
  sellerName: string
  price: number
  status: string
  createdTime: string
}

// 创建订单参数
export interface CreateOrderParams {
  vehicleId: number
  price: number
}

// 创建订单响应
export interface CreateOrderResponse {
  code: number
  message: string
  data: {
    orderId: number
    status: string
  }
}

// 订单列表响应
export interface OrderListResponse {
  code: number
  message: string
  data: {
    total: number
    items: Order[]
  }
}

// 创建订单
export async function createOrder(params: CreateOrderParams): Promise<CreateOrderResponse> {
  const res = await api.post('/orders', params)
  return res.data
}

// 根据买家身份获取订单列表（不再需要 buyerId）
export async function getBuyerOrderList(
  params: { status?: string; page?: number; size?: number } = {},
): Promise<OrderListResponse> {
  const res = await api.get('/orders/buyer', {
    params,
  })
  return res.data
}

// 根据卖家身份获取订单列表（不再需要 sellerId）
export async function getSellerOrderList(
  params: { status?: string; page?: number; size?: number } = {},
): Promise<OrderListResponse> {
  const res = await api.get('/orders/seller', {
    params,
  })
  return res.data
}

