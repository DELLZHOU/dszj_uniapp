import request from '@/utils/request'
export function register(data) {
  return request({
    url: '/admin/register',
    method: 'post',
    data
  })
}
export function login(data) {
  return request({
    url: '/admin/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/admin/info',
    method: 'get',
    params: { token }
  })
}

export function logout(token) {
  return request({
    url: '/admin/logout',
    method: 'get',
    params: { token }
  })
}
