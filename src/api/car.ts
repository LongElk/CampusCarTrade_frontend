import api from './base'

// 车辆列表项
export interface CarListItem {
  id: number
  title: string
  price: number
  imageUrl: string
}

// 车辆列表响应
export interface CarListResponse {
  code: number
  message: string
  data: {
    total: number
    page: number
    size: number
    items: CarListItem[]
  }
}

// 发布车辆参数
export interface PublishCarParams {
  title: string
  type: string
  description: string
  price: number
  mileage: number
  location: string
  imageUrls: string[] // 新增图片url数组
}

// 发布车辆响应
export interface PublishCarResponse {
  code: number
  message: string
  data: {
    vehicleId: number
  }
}

// 上传车辆图片响应
export interface UploadImageResponse {
  code: number
  message: string
  data: {
    imageId: number
    url: string
  }
}

// 车辆详情
export interface CarDetail {
  id: number
  sellerVO: {
    id: number
    name: string
    phone: string
  }
  title: string
  type: string
  description: string
  price: number
  status: string
  mileage: number
  location: string
  publishTime: string
  images: {
    id: number
    url: string
    sortOrder: number
  }[]
}

// 车辆详情响应
export interface CarDetailResponse {
  code: number
  message: string
  data: CarDetail
}

// 发布车辆
export async function publishCar(params: PublishCarParams): Promise<PublishCarResponse> {
  const res = await api.post('/vehicles', params)
  return res.data
}

// 上传车辆图片，返回图片url
export async function uploadCarImage(image: File, sortOrder: number): Promise<UploadImageResponse> {
  const formData = new FormData()
  formData.append('file', image)
  formData.append('sortOrder', sortOrder.toString())
  const res = await api.post(`/images/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return res.data
}

// 获取车辆列表
export async function getCarList(
  params: {
    page?: number
    size?: number
    type?: string
    keyword?: string
    minPrice?: number
    maxPrice?: number
  } = {},
): Promise<CarListResponse> {
  const res = await api.get('/vehicles', { params })
  return res.data
}

// 获取车辆详情
export async function getCarDetail(vehicleId: number): Promise<CarDetailResponse> {
  const res = await api.get(`/vehicles/${vehicleId}`)
  return res.data
}

// 更新车辆状态
export async function updateCarStatus(
  vehicleId: number,
  status: string,
): Promise<{ code: number; message: string }> {
  const res = await api.put(`/vehicles/${vehicleId}/status`, { status })
  return res.data
}
