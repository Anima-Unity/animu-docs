import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
  <>
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4 0 1.1.45 2.1 1.17 2.83L7 15l1.41 1.41L11.58 13H12c2.21 0 4-1.79 4-4s-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
      />
      <circle cx="9" cy="9" r="1" fill="currentColor" />
      <circle cx="15" cy="9" r="1" fill="currentColor" />
      <path
        fill="currentColor"
        d="M11.5 14.5c0 .28.22.5.5.5s.5-.22.5-.5-.22-.5-.5-.5-.5.22-.5.5z"
      />
    </svg>
    <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
      Anima Unity Docs
    </span>
  </>
),
  project: {
    link: 'https://github.com/Anima-Unity',
  },
  chat: {
    link: 'https://discord.com/invite/BmcsMbArvR',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Anima Unity Docs',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Anima Unity" />
      <meta property="og:description" content="Anima Unity Documentation" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://ibb.co.com/GW4cyxz" />
    </>
  )
}

export default config
