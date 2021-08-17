import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios'

import { ApiGetType } from '../../types/API/ApiRoutes'

class ApiClient {
  private instance: AxiosInstance

  constructor(api: string) {
    this.instance = axios.create({ baseURL: api })
  }

  public setBearerToken(token: string) {
    this.instance.defaults.headers.common = { Authorization: `Bearer ${token}` }
  }

  public clearBearerToken() {
    this.instance.defaults.headers.common = null
  }

  public setInterceptors() {
    this.instance.interceptors.request.use(
      (config) => {
        const newConfig = Object.assign({}, config)
        return newConfig
      },
      (error) => Promise.reject(error),
    )

    // JSON.stringify use toJSON on object. this method in axios response return not the error object we want to
    // if there is no toJSON it is classic serialization
    // if need "request data" in error object, has to be done manual since there is circular reference somewhere, idk where
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        const newError = {
          ...error,
          request: {},
          response: {
            ...error.response,
            request: {},
          },
          toJSON: null,
        }
        return Promise.reject(newError)
      },
    )
  }

  /**
   * Performs GET to REST API
   */
  public get<T extends ApiGetType>(baseUrl: T['url'], urlParams?: string, config?: AxiosRequestConfig): AxiosPromise<T['response']> {
    const url = urlParams ? baseUrl + urlParams : baseUrl
    return this.instance.get(url, config)
  }

  /**
   * Performs POST to REST API
   */
  /*
  public post<T extends ApiPostType>(
    baseUrl: T['url'],
    urlParams?: string,
    // @ts-ignore
    data?: T['request'],
    config?: AxiosRequestConfig,
  ): AxiosPromise<T['response']> {
    const url = urlParams ? baseUrl + urlParams : baseUrl
    return this.instance.post(url, data, config).catch((e) => {
      const newError: AxiosResponse<any> = {
        ...e,
        request: {},
        response: {
          ...e.response,
          request: {},
        },
      }
      throw newError
    })
  }
  */

  /**
   * Performs PUT to REST API
   */
  /*
  public put<T extends ApiPutType>(
    baseUrl: T['url'],
    urlParams?: string,
    // @ts-ignore
    data?: T['request'],
    config?: AxiosRequestConfig,
  ): AxiosPromise<T['response']> {
    const url = urlParams ? baseUrl + urlParams : baseUrl
    return this.instance.put(url, data, config)
  }
  */

  /**
   * Performs PATCH to REST API
   */
  /*
  public patch<T extends ApiPatchType>(
    baseUrl: T['url'],
    urlParams?: string,
    // @ts-ignore
    data?: T['request'],
    config?: AxiosRequestConfig,
  ): AxiosPromise<T['response']> {
    const url = urlParams ? baseUrl + urlParams : baseUrl
    return this.instance.patch(url, data, config)
  }
  */

  /**
   * Performs DELETE to REST API
   */
  /*
  public delete<T extends ApiDeleteType>(baseUrl: T['url'], urlParams?: string, config?: AxiosRequestConfig): AxiosPromise<T['response']> {
    const url = urlParams ? baseUrl + urlParams : baseUrl
    return this.instance.delete(url, config)
  }
  */
}

let apiClient: ApiClient | null = null

export const middlewareAPIClient = () => {
  if (!apiClient) {
    apiClient = new ApiClient(process.env.REACT_APP_API_URL || '')
    apiClient.setInterceptors()
  }

  return apiClient
}
