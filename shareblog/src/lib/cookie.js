// 在cookie中设置对应的key
function setCookie (name, value, day = 1) {
  var expire = new Date()
  expire.setTime(expire.getTime() + day * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + value + ';expires=' + expire.toGMTString()
}

// 从cookie中取出对应的key
function getCookie (name) {
  const arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
  if (arr != null) {
    return unescape(arr[2])
  } else {
    return null
  }
}

// 删除cookie中对应的key
function clearCookie (name) {
  var expire = new Date()
  expire.setTime(expire.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + expire.toGMTString()
  }
}

export default {
  clearCookie,
  getCookie,
  setCookie
}
