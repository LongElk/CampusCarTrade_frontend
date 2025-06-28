import api from './base'

export async function getAccountInfo() {
  const res = await api.get('/api/account')
  return res.data
}

export async function rechargeAccount(amount: number) {
  const res = await api.post('/api/account/recharge', { amount })
  return res.data
}
