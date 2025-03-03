import axios from "axios"
import Cookie from 'js-cookie'

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

// 新しいユーザーを登録
export const register = async (username, email, password) => {
  await axios.post(`${API_URL}/auth/local/register`, {
    username,
    email,
    password
  }).then((res) => {
    Cookie.set("token", res.data.jw, { expires: 7 })
    console.log(res.data.jwt)
  }).catch((error) => {
    console.error(error)
  })
}