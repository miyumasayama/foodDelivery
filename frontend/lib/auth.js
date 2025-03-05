import axios from "axios"
import Cookie from 'js-cookie'

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

// 新しいユーザーを登録
export const register = (username, email, password) => {
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}/api/auth/local/register`, {
      username,
      email,
      password
    }).then((res) => {
      Cookie.set("token", res.data.jw, { expires: 7 })
      resolve(res)
      window.location.href = '/'
    }).catch((error) => {
      // TODO: エラー表示
      reject(error)
      console.error(error)
    })
  })
}

export const login = (identifier, password) => {
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}/api/auth/local`, {
      identifier,
      password
    }).then((res) => {
      Cookie.set("token", res.data.jw, { expires: 7 })
      resolve(res)
      window.location.href = '/'
    }).catch((error) => {
      // TODO: エラー表示
      reject(error)
      console.error(error)
    })
  })
}