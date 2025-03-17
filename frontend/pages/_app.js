import React from 'react'
import App from "next/app"
import Head from "next/head"
import Layout from "../components/layout"
import withData from "../lib/apollo"
import AppContext from '../context/context'
import Cookies from 'js-cookie'

class MyApp extends App {

  // classコンポーネントのためuseStateを使えないが、意味的にはconst [user, setUser] = useState(null)と同じ
  state = {
    user: null,
    cart: { items: [], total: 0 }
  }
  setUser = (user) => {
    this.setState({ user })
  }

  // Mount時にクッキー情報が残っているかを確認
  componentDidMount() {
    const token = Cookies.get("token")
    const cart = Cookies.get("cart")

    if (cart != undefined && typeof cart === "string") {
      JSON.parse(cart).forEach((item) => {
        this.setState({
          cart: {
            items: JSON.parse(cart),
            total: this.state.cart.total += item.price * item.quantity
          }
        })
      })
    }
    if (!!token) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,

        }
      }).then(async (res) => {
        if (!res.ok) {
          Cookies.remove('token')
          this.setState({ user: null })
          return null
        }
        const user = await res.json();
        this.setUser(user)
      })
    }
  }

  // カートに商品を追加する
  addItem = (item) => {
    let items = this.state.cart.items ?? []
    const duplicatedItem = items.find((i) =>
      i.documentId === item.documentId
    )
    if (!duplicatedItem) {
      item.quantity = 1;
      this.setState({
        cart: {
          items: [...items, item],
          total: this.state.cart.total + item.price
        },

      },
        () => Cookies.set("cart", this.state.cart.items)
      )
    } else {
      this.setState({
        cart: {
          items: this.state.cart.items.map((item) =>
            item.documentId === duplicatedItem.documentId ?
              Object.assign({}, item, { quantity: item.quantity + 1 }) : item),
          total: this.state.cart.total + item.price
        },

      },
        () => Cookies.set("cart", this.state.cart.items)
      )
    }
  }

  // カートに商品を追加する
  removeItem = (item) => {
    let { items } = this.state.cart
    const removedItem = items?.find((i) =>
      i.documentId === item.documentId
    )
    if (removedItem.quantity > 1) {
      this.setState({
        cart: {
          items: this.state.cart.items.map((item) =>
            item.documentId === removedItem.documentId ?
              Object.assign({}, item, { quantity: item.quantity - 1 }) : item),
          total: this.state.cart.total - item.price
        },

      },
        () => Cookies.set("cart", this.state.cart.items)
      )
    } else {
      const items = [...this.state.cart.items]
      const index = items.findIndex((item) => item.documentId === removedItem.documentId)
      items.splice(index, 1)
      this.setState({
        cart: {
          items,
          total: this.state.cart.total - item.price
        },

      },
        () => Cookies.set("cart", this.state.cart.items)
      )
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <AppContext.Provider
        value={{
          user: this.state.user,
          cart: this.state.cart,
          setUser: this.setUser,
          addItem: this.addItem,
          removeItem: this.removeItem
        }}
      >
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