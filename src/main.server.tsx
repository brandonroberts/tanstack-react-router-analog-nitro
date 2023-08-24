import ReactDOMServer from 'react-dom/server'
import { RouterProvider, createMemoryHistory } from '@tanstack/react-router'

import { createRouter } from './router'
import { StrictMode } from 'react'

export default async function render(url: string, document: string) {
  const router = createRouter()

  const memoryHistory = createMemoryHistory({
    initialEntries: [url],
  })

  router.update({
    history: memoryHistory,
  })

  await router.load()

  const appHtml = ReactDOMServer.renderToString(<StrictMode><RouterProvider router={router} /></StrictMode>)

  const html = document.replace('<!--app-html-->', appHtml);

  return html;
}