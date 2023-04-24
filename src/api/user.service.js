import { api } from './api'
const ENDPOINT = `${api.server + api.apiVersion}/users`

export const getUsers = async () => {
  try {
    const response = await fetch(ENDPOINT)
    return response.json()
  } catch {
    throw new Error('could not fetch users')
  }
}
