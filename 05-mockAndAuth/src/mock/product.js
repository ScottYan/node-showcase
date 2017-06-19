const Mock = require('mockjs')

const apiPrefix = '/mock'
const customerListData = Mock.mock({
  'data|80-100': [
    {
      id: '@guid',
      code: '@id',
      name: '@name',
      brand: '@last',
      shelfStatus: '@boolean',
      'price|200-9999.1-2': 100,
      availableStock: '@integer(1,999)',
      lockingStock: '@integer(1,20)',
      'addressList|5-9': [{
        id: '@id',
        receiver: '@name',
        phone_number: /^1[34578]\d{9}$/,
        province: '@province',
        city: '@city',
        area: '@county',
        street: '@county(true)',
        'detail_address|2-5': 'saw3',
        is_default: '@boolean'
      }]
    }
  ]
})

module.exports = {
  [`GET ${apiPrefix}/customer`](req, res) {
    res.status(200).json(customerListData);
  }
}

