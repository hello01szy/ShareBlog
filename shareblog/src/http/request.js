import http from './http'
export const getArticleById = (param, config) => http.post('/getArticleById', param, config)
export const getAllArticles = (param, config) => http.get('/getAllArticles', param, config)
