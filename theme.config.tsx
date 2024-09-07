import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
  <>
    <img 
        src="/images/logo.png"
        alt="Anima Unity Logo" 
        width="24" 
        height="24" 
      />
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
<meta name="twitter:image" content="https://th.bing.com/th/id/OIG3.vRfWyHvEASc.hagrdxki?dpr=2,8&pid=ImgDetMain" />
    </>
  )
}

export default config
