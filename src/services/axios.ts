import * as express from 'express'
import * as next from 'next'
import axios, { AxiosInstance } from 'axios'
import { parseCookies } from 'nookies'

export function getAPIClient(
  ctx?:
    | Pick<next.NextPageContext, 'req'>
    | {
      req: next.NextApiRequest // eslint-disable-line prettier/prettier
    } // eslint-disable-line prettier/prettier
    | {
      req: express.Request // eslint-disable-line prettier/prettier
    } // eslint-disable-line prettier/prettier
    | null
    | undefined
): AxiosInstance {
  const { 'ifconnect.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`
  })

  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  return api
}
