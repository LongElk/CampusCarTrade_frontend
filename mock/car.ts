import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/vehicles',
    method: 'get',
    response: ({ query }) => {
      // mock数据
      const allItems = [
        {
          id: 1,
          title: '九成新山地自行车',
          type: 'BICYCLE',
          price: 300,
          status: 'AVAILABLE',
          location: 'XX校区',
          publishTime: '2023-06-29 10:00:00',
          imageUrl:
            'https://youpin.img898.com/csgo/template/d8b8bb7aee124ea9ae2b8281ef88cacd.png?x-oss-process=image/format,webp/quality,Q_100',
        },
        {
          id: 2,
          title: '八成新电动车',
          type: 'ELECTRIC',
          price: 1200,
          status: 'AVAILABLE',
          location: 'YY校区',
          publishTime: '2023-06-28 09:00:00',
          imageUrl:
            'https://youpin.img898.com/csgo/template/a1a6fbbb333549a8b068d58580f6c337.png?x-oss-process=image/format,webp/quality,Q_100',
        },
        {
          id: 3,
          title: '七成新山地自行车',
          type: 'BICYCLE',
          price: 200,
          status: 'AVAILABLE',
          location: 'ZZ校区',
          publishTime: '2023-06-27 08:00:00',
          imageUrl:
            'https://youpin.img898.com/csgo/template/b939c38553c444678e7d16662e622dde.png?x-oss-process=image/format,webp/quality,Q_100',
        },
        {
          id: 4,
          title: '九成新电动车',
          type: 'ELECTRIC',
          price: 1500,
          status: 'AVAILABLE',
          location: 'XX校区',
          publishTime: '2023-06-26 10:00:00',
          imageUrl:
            'https://youpin.img898.com/csgo/template/9e5ddbb751e2420fbe0d45eab504dbe0.png?x-oss-process=image/format,webp/quality,Q_100',
        },
        {
          id: 5,
          title: '六成新山地自行车',
          type: 'BICYCLE',
          price: 100,
          status: 'AVAILABLE',
          location: 'YY校区',
          publishTime: '2023-06-25 10:00:00',
          imageUrl:
            'https://youpin.img898.com/csgo/template/d8b8bb7aee124ea9ae2b8281ef88cacd.png?x-oss-process=image/format,webp/quality,Q_100',
        },
      ]

      // 筛选逻辑
      let filtered = allItems
      if (query.type) {
        filtered = filtered.filter((item) => item.type === query.type)
      }
      if (query.minPrice) {
        filtered = filtered.filter((item) => item.price >= Number(query.minPrice))
      }
      if (query.maxPrice) {
        filtered = filtered.filter((item) => item.price <= Number(query.maxPrice))
      }
      if (query.keyword) {
        filtered = filtered.filter((item) => item.title.includes(query.keyword))
      }

      // 分页
      const page = Number(query.page) || 1
      const size = Number(query.size) || 10
      const start = (page - 1) * size
      const end = start + size
      const items = filtered.slice(start, end)

      return {
        code: 200,
        message: '获取成功',
        data: {
          total: filtered.length,
          page,
          size,
          items,
        },
      }
    },
  },
  {
    url: '/vehicles',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '发布成功',
        data: {
          vehicleId: Math.floor(Math.random() * 10000) + 1,
        },
      }
    },
  },
  // 模拟上传车辆图片接口
  {
    url: '/vehicles/images',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '上传成功',
        data: {
          imageId: Math.floor(Math.random() * 10000) + 1,
          url: 'https://oss.example.com/images/mock_' + Date.now() + '.jpg',
        },
      }
    },
  },
  {
    url: '/vehicles/1',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '获取成功',
        data: {
          id: 1,
          seller: {
            id: 1,
            name: '张三',
            phone: '138****8000',
          },
          title: '九成新山地自行车',
          type: 'BICYCLE',
          description: '买了一年，骑行次数不多，车况良好',
          price: 300,
          status: 'AVAILABLE',
          mileage: 500,
          location: 'XX校区宿舍楼下',
          publishTime: '2023-06-29 10:00:00',
          images: [
            {
              id: 1,
              url: 'https://oss.example.com/images/xxx1.jpg',
              sortOrder: 1,
            },
          ],
          analytics: {
            viewCount: 120,
            favoriteCount: 5,
          },
        },
      }
    },
  },
] as MockMethod[]
