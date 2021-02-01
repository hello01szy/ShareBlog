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
    'content': '# Jekins的使用方式\n\n## 1. 什么是Jenkins？\n\nJenkins是一个**开源的**、提供友好操作界面的持续集成(CI)工具，起源于Hudson（Hudson是商用的）\n\n## 主要用于持续\n\n自动的构建/测试软件项目、监控外部任务的运行（这个比较抽象，暂且写上，不做解释）。Jenkins用Java语言编写，可在Tomcat等流行的servlet容器中运行，也可独立运行。通常与版本管理工具(SCM)、构建工具结合使用。常用的版本控制工具有SVN、GIT，构建工具有Maven、Ant、Gradle\n\n#### 2. CI/CD是什么\n\nCI(Continuous integration，中文意思是持续集成)是一种软件开发时间。持续集成强调开发人员提交了新代码之后，立刻进行构建、（单元）测试。根据测试结果，我们可以确定新代码和原有代码能否正确地集成在一起。借用网络图片对CI加以理解\n\nCD(Continuous Delivery， 中文意思持续交付)是在持续集成的基础上，将集成后的代码部署到更贴近真实运行环境(类生产环境)中。比如，我们完成单元测试后，可以把代码部署到连接数据库的Staging环境中更多的测试。如果代码没有问题，可以继续手动部署到生产环境。下图反应的是CI/CD 的大概工作模式\n\n![me](https://picsum.photos/200/300)\n\n## 3.使用Jenkins进行PHP代码(单元)测试、打包\n\nJenkins是一个强大的CI工具，虽然本身使用Java开发，但也能用来做其他语言开发的项目CI。下面讲解如何使用Jenkins创建一个构建任务。跳转到如下界面。任务名称可以自行设定，但需要全局唯一。输入名称后选择构建一个自由风格的软件项目(其他选项不作介绍)。并点击下方的确定按钮即创建了一个构建任务。之后会自动跳转到该job的配置页面下图是构建任务设置界面，可以看到上方的几个选项"General", "源码管理"， "构建触发器"，"构建环境"， "构建"， "构建后操作"。下面逐一介绍\n# 项目名称\n## ShareBlog\n是刚才创建构建任务步骤设置的，当然在这里也可以更改。服务器资源是有限的，有时候保存了太多的历史构建，会导致Jenkins速度变慢，并且服务器硬盘资源也会被占满。当然下方的"保持构建天数" 和 保持构建的最大个数是可以自定义的，需要根据实际情况确定一个合理的值'
  }
  return blog;
}

Mock.mock('/test', 'get', articlesData)
Mock.mock('/tag', 'get', dropDownData)
Mock.mock('/blog', 'get', blogData)
