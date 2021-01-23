import Mock from 'mockjs'
const random = Mock.Random

const articlesData = () => {
  const articles = []
  for (let i = 0; i < 19; i++) {
    const article = {
      'id': i,
      'title': random.ctitle(),
      'age': 18
    }
    articles.push(article)
  }
  const result = {
    'articles': articles
  }
  return result
}

const dropDownData = () => {
  const datas = []
  for (let i = 0; i < 4; i++) {
    const data = {
      'tag': random.ctitle(),
      'counts': 10,
      'childs': [
        { 'tag': random.ctitle(), 'counts': 2 },
        { 'tag': random.ctitle(), 'counts': 3 },
        { 'tag': random.ctitle(), 'counts': 1 }
      ]
    }
    datas.push(data)
  }
  return datas
}

Mock.mock('/test', 'get', articlesData)
Mock.mock('/tag', 'get', dropDownData)
