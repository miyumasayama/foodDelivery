import React from 'react'
import App from "next/app"
import Head from "next/head"
import Link from "next/link"
import { Nav, NavItem, Container } from 'reactstrap';

const layout = (props) => {
  return (
    <div>
      <Head>
        <title>food delivery service</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        />
      </Head>
      <header>
        <style jsx>
          {`
          a {
            color: white
          
          }`}
        </style>
        <Nav className='navbar navbar-dark bg-dark'>
          <NavItem>
            <Link href="/">
              <a className='navbar-brand'>ホーム</a>
            </Link>
          </NavItem>
        </Nav>
      </header>
      <Container>{props.children}</Container>
    </div>
  );
}

export default layout;