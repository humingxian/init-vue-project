import Mock from 'mockjs'
import moment from 'moment'

Mock.setup({
  timeout: '10-100'
})

export default {
  data: null,
  message: "",
  statusCode: 200,
  timeStamp: moment().unix()
}