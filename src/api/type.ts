import { DefaultParams } from 'types/common'
export type Method = 'get' | 'GET' | 'post' | 'POST' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'put' | 'PUT' | 'patch' | 'PATCH'

export interface RequestAxios{
  url: string,
  method: Method,
  data: DefaultParams
}
export type GetOrPostRequestCallback = (url: string, data: DefaultParams, _options: DefaultParams) => void

export type RequestCallback = (_options: RequestAxios) => void