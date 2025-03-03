// サーバー設定のライブラリの作成
import { HttpLink } from 'apollo-link-http'
import { withData } from 'next-apollo'
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

const config = {
  link: new HttpLink({
    uri: `${API_URL}/graphql`,
    // headers: {
    //   "content-type": "application/json",
    //   "x-apollo-operation-name": "query"
    // }
  })
}

export default withData(config)