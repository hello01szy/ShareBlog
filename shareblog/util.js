// 将8位日期字符串转换为年月日时间
export const parseStrToDate = (dateStr) => {
  const yearStr = dateStr.substring(0, 4) + '年'
  const monthStr = dateStr.substring(4, 6) + '月'
  const dayStr = dateStr.substring(6, 8) + '日'
  return yearStr + monthStr + dayStr
} 