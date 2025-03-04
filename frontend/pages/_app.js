import React from 'react'
import App from "next/app"
import Head from "next/head"
import Layout from "../components/layout"
import withData from "../lib/apollo"
import AppContext from '../context/context'

class MyApp extends App {

  // classコンポーネントのためuseStateを使えないが、意味的にはconst [user, setUser] = useState(null)と同じ
  state = {
    user: null
  }
  setUser = (user) => {
    this.setState({ user })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <AppContext.Provider value={{ user: this.state.user, setUser: this.setUser }}>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          />
        </Head>
        <Layout>
          {/* Componentはすべてのコンポーネントを指す */}
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    )
  }
}

// すべてのサーバーでgraphQLを設定できるようにする
export default withData(MyApp)