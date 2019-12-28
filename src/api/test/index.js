import { $get } from 'requ/index'

export const getList = data => {
  return $get('/test/list', data)
}
