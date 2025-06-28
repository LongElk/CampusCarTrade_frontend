import api from './base'

export interface Car {
  brand: string
  model: string
  year: number
  price: number
}

export async function getCarList(): Promise<Car[]> {
  const res = await api.get('/api/cars')
  return res.data
}

// 可扩展：发布车辆、删除车辆等
