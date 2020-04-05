import request from '../utils/request.js'

export function testHttp(data) {
  return request({
    url: '/api/user/pcUser/login',
    method: 'post',
    data
  })
}
