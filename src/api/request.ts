import axios from 'axios'
import './config.ts'
import { RequestCallback, GetOrPostRequestCallback } from './type'

const request: RequestCallback = async (_options) => {
  // 默认GET方法
  return axios(_options)
}

const get: GetOrPostRequestCallback = (url, data = {}, _options = {}) => {
  return request({ ..._options, data, url, method: 'GET' })
}

const post:GetOrPostRequestCallback = (url, data = {}, _options = {}) => {
  return request({ ..._options, data, url, method: 'POST' })
}

export { get, post }
export default request

