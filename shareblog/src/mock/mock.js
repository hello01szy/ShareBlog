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

const blogData = () => {
  const blog = {
    'title': 'Jenkins使用方式',
    'publish': '20210130',
    'tag': '运维',
    'content': '### Jekins的使用方式\n\n#### 1. 什么是Jenkins？\n\nJenkins是一个开源的、提供友好操作界面的持续集成(CI)工具，起源于Hudson（Hudson是商用的），主要用于持续、自动的构建/测试软件项目、监控外部任务的运行（这个比较抽象，暂且写上，不做解释）。Jenkins用Java语言编写，可在Tomcat等流行的servlet容器中运行，也可独立运行。通常与版本管理工具(SCM)、构建工具结合使用。常用的版本控制工具有SVN、GIT，构建工具有Maven、Ant、Gradle\n\n#### 2. CI/CD是什么\n\nCI(Continuous integration，中文意思是持续集成)是一种软件开发时间。持续集成强调开发人员提交了新代码之后，立刻进行构建、（单元）测试。根据测试结果，我们可以确定新代码和原有代码能否正确地集成在一起。借用网络图片对CI加以理解||什么是Jenkins？\n\nJenkins是一个开源的、提供友好操作界面的持续集成(CI)工具，起源于Hudson（Hudson是商用的），主要用于持续、自动的构建/测试软件项目、监控外部任务的运行（这个比较抽象，暂且写上，不做解释）。Jenkins用Java语言编写，可在Tomcat等流行的servlet容器中运行，也可独立运行。通常与版本管理工具(SCM)、构建工具结合使用。常用的版本控制工具有SVN、GIT，构建工具有Maven、Ant、Gradle\n\n#### 2. CI/CD是什么\n\nCI(Continuous integration，中文意思是持续集成)是一种软件开发时间。持续集成强调开发人员提交了新代码之后，立刻进行构建、（单元）测试。根据测试结果，我们可以确定新代码和原有代码能否正确地集成在一起。借用网络图片对CI加以理解'
  }
  return blog;
}

Mock.mock('/test', 'get', articlesData)
Mock.mock('/tag', 'get', dropDownData)
Mock.mock('/blog', 'get', blogData)
