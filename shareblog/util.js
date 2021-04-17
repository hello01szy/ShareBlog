// 将8位日期字符串转换为年月日时间
export const parseStrToDate = (dateStr) => {
  const yearStr = dateStr.substring(0, 4) + '年'
  const monthStr = dateStr.substring(4, 6) + '月'
  const dayStr = dateStr.substring(6, 8) + '日'
  return yearStr + monthStr + dayStr
}
// 获取当前日期的6位字符串
export const parseDateToStr = () => {
  const d = new Date()
  const year = d.getFullYear()
  let month = d.getMonth() + 1
  if (month < 10) {
    month = '0' + month
  }
  const day = d.getDate()
  return year + month + day
}
