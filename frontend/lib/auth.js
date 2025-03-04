import axios from "axios"
import Cookie from 'js-cookie'

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

// 新しいユーザーを登録
export const register = async (username, email, password) => {
  const a = await axios.post(`${API_URL}/api/auth/local/register`, {
    username,
    email,
    password
  }).then((res) => {
    Cookie.set("token", res.data.jw, { expires: 7 })
  }).catch((error) => {
    console.error(error)
  })
}