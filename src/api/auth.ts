import api from './base'

export async function login(username: string, password: string): Promise<{ token?: string }> {
  const res = await api.post('/api/login', { username, password })
  return res.data
}

export interface RegisterResponse {
  token?: string
  // add other fields returned by the register API if needed
}

export async function register(username: string, password: string): Promise<RegisterResponse> {
  const res = await api.post('/api/register', { username, password })
  return res.data
}
