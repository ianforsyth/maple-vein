import React, { ReactNode } from 'react'
import Head from 'next/head'
import { P } from './UI'

const Layout = ({ children, title }: { children: ReactNode, title?: string }) => (
  <>
    <Head>
      <title>Maple Vein Woodworking{title && ` - ${title}`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* Google fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Bitter&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />

      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <div className="flex flex-col h-full overflow-auto justify-between">
      <div>
        {children}
      </div>
      <footer className="flex items-end justify-center p-2 mt-8">
        <img
          className="w-11 pb-0.5"
          src="/boulder.svg"
          alt="Maple Vein Woodworking"
        />
        <p className="text-sm text-gray leading-none ml-1 font-bold">Crafted in Boulder, CO</p>
      </footer>
    </div>
  </>
)

export default Layout
