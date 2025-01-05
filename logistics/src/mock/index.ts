import Mock from "mockjs"
import type { ApiResponse, Order } from "@/types/api"

// 模拟订单列表接口
Mock.mock("/api/orders", "get", (): ApiResponse<Order[]> => {
  // 使用Mock.mock方法生成模拟数据
  const orders = Mock.mock({
    // 生成10条数据的数组
    "data|10": [
      {
        // 自增ID
        "id|+1": 1,
        // 使用正则生成订单号
        orderNo: /ORDER\d{6}/,
        // 生成中文姓名
        customerName: "@cname",
        // 生成100-10000之间的数字
        "amount|100-10000": 100,
        // 随机选择状态
        "status|1": ["pending", "completed"],
        // 生成日期时间
        createTime: "@datetime"
      }
    ]
  })

  // 返回响应数据
  return {
    code: 200,
    data: orders.data,
    message: "success"
  }
})
