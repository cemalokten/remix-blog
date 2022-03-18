import React from 'react'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import type { MetaFunction } from 'remix'
import { useLocation } from 'react-router-dom'

import { GlobalStyle } from '~/styles'
import styles from '~/styles/global.css'
import * as C from './components/index'
import github from './styles/github.css'

type Props = {
  children: React.ReactNode
}

export const meta: MetaFunction = () => ({
  title: 'Cemal Okten Junior Developer',
})

export const links = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'stylesheet', href: github },
]

function Layout({ children }: Props) {
  return (
    <>
      <C.Header />
      {children}
      <C.Footer />
    </>
  )
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <Layout>
          <GlobalStyle />
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
