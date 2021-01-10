import Mock from 'mockjs'
const random = Mock.Random

const articlesData = () => {
  const articles = []
  for (let i = 0; i < 5; i++) {
    const article = {
      'id': i,
      'title': random.ctitle(),
      'age': 18
    }
    articles.push(article)
  }
  return articles
}

Mock.mock('/test', 'get', articlesData)
