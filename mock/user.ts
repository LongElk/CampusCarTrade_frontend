import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/auth/login',
    method: 'post',
    response: ({ body }) => {
      return {
        code: 200,
        message: '登录成功',
        data: {
          token: 'mocked_token_123',
          user: {
            id: 1,
            email: body.email,
            name: '张三',
            role: 'BUYER',
            school: 'XX大学',
          },
        },
      }
    },
  },
  {
    url: '/auth/register',
    method: 'post',
    response: ({ body }) => {
      return {
        code: 200,
        message: '注册成功',
        data: {
          userId: 2,
          email: body.email,
        },
      }
    },
  },
  {
    url: '/auth/profile',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '获取成功',
        data: {
          id: 1,
          email: 'student@university.edu.cn',
          name: '张三',
          phone: '13800138000',
          role: 'BUYER',
          school: 'XX大学',
        },
      }
    },
  },
] as MockMethod[]
