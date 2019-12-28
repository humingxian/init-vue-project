var Mock = require('mockjs')

// Mock.Random 是一个工具类，用于生成各种随机数据。
const Random = Mock.Random

Mock.mock(`/test/list`, {
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|5': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1
  }],
  email: Random.email(), // 返回一个随机的邮箱地址
  color: Random.color(), // 返回一个随机的颜色值（16进制）
  boolean: Random.boolean(1, 9, true), // 返回一个随机的布尔值。
  natural: Random.natural(), // 返回一个随机的自然数（大于等于 0 的整数）。
  integer: Random.integer(60, 100), // 返回一个随机的整数。
  date: Random.date('yyyy-MM-dd'), // 返回一个随机的日期字符串。
  image: Random.image('200x100', '#ffcc33', '#FFF', 'png', '!'), // 生成一个随机的图片地址。
  base64Image: Random.dataImage('200x100', 'Hello Mock.js!'), // 生成一段随机的 Base64 图片编码。
  region: Random.region(), // 随机生成一个（中国）大区。
  shuffleArray: Random.shuffle(['1', '2', '3', '4', '5']), // 打乱数组中元素的顺序，并返回
  guid: Random.guid() // 随机生成一个 GUID
})
