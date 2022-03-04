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
import styles from '~/styles/global.css'
import * as C from './components/index'

type Props = {
  children: React.ReactNode
}

export const meta: MetaFunction = () => ({
  title: 'Cemal Okten Junior Developer',
})

export const links = () => [{ rel: 'stylesheet', href: styles }]

function Layout({ children }: Props) {
  return (
    <>
      <C.Header post />
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
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
