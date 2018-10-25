import Http from '../utils/Http'

const { post } = Http.create('admin')

export const getArticle = params => post({ url: 'blog/article/list', params })
export const getDetail = params => post({ url: 'blog/article/detail', params })
