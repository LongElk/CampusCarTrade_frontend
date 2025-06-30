import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/orders',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '订单创建成功',
        data: {
          orderId: 1,
          status: 'PENDING',
        },
      }
    },
  },
  {
    url: '/orders',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '获取成功',
        data: {
          total: 1,
          items: [
            {
              id: 1,
              vehicle: {
                id: 1,
                title: '九成新山地自行车',
                imageUrl:
                  'https://youpin.img898.com/csgo/template/0c73847433c64b83afc222786d464c76.png?x-oss-process=image/format,webp/quality,Q_100',
              },
              buyerName: '李四',
              sellerName: '张三',
              price: 300,
              status: 'PENDING',
              createdTime: '2023-06-29 14:00:00',
            },
          ],
        },
      }
    },
  },
] as MockMethod[]
