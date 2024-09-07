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
  // Tambahkan konfigurasi Telegram di sini
  navbar: {
    extraContent: (
      <>
        <a href="https://t.me/animaunityhub" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
  <path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"/>
</svg>
        </a>
      </>
    ),
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