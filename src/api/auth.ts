import api from './base'

// 登录
export interface LoginUser {
  id: number
  email: string
  name: string
  role: string
  school: string
}

export interface LoginResponse {
  code: number
  message: string
  data: {
    token: string
    user: LoginUser
  }
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const res = await api.post('/auth/login', { email, password })
  return res.data
}

// 注册
export interface RegisterParams {
  email: string
  password: string
  name: string
  phone: string
  school: string
}

export interface RegisterResponse {
  code: number
  message: string
  data: {
    userId: number
    email: string
  }
}

export async function register(params: RegisterParams): Promise<RegisterResponse> {
  const res = await api.post('/auth/register', params)
  return res.data
}

// 获取当前用户信息
export interface UserProfile {
  id: number
  email: string
  name: string
  phone: string
  role: string
  school: string
}

export interface ProfileResponse {
  code: number
  message: string
  data: UserProfile
}

export async function getCurrentUser(token: string): Promise<ProfileResponse> {
  const res = await api.get('/auth/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return res.data
}
