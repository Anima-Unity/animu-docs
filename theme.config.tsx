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
  docsRepositoryBase: 'https://github.com/A-fauzi/animu-docs',
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/Anima-Unity" target="_blank">
          Anima Unity Docs
        </a>
        .
      </span>
    )
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://animu-docs.vercel.app' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
    const siteName = 'Anima Unity Documentation'
    const defaultDescription = 'Official documentation for Anima Unity - Complete guide for development documentation'
    const defaultImage = 'https://animu-docs.vercel.app/logotxt.png' // Pastikan untuk membuat og-image.png
    
 
    return (
      <>
        {/* Primary Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content={frontMatter.title || siteName} />
        <meta name="description" content={frontMatter.description || defaultDescription} />
        <meta name="keywords" content={frontMatter.keywords || 'anima unity, development, documentation'} />
        <meta name="author" content="Afauzi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || siteName} />
        <meta property="og:description" content={frontMatter.description || defaultDescription} />
        <meta property="og:image" content={frontMatter.image || defaultImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content={locale || 'en'} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AnimaUnity" /> {/* Ganti dengan Twitter handle yang benar */}
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={frontMatter.title || siteName} />
        <meta name="twitter:description" content={frontMatter.description || defaultDescription} />
        <meta name="twitter:image" content={frontMatter.image || defaultImage} />
        
        {/* PWA Tags */}
        <meta name="application-name" content={siteName} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={siteName} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />

        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/images/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />

        {/* Alternate Languages */}
        <link rel="alternate" href={url} hrefLang="x-default" />
        <link rel="alternate" href={url} hrefLang="en" />
        {/* Tambahkan bahasa lain jika ada */}

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": siteName,
              "url": url,
              "description": defaultDescription,
              "publisher": {
                "@type": "Organization",
                "name": "Anima Unity",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://animu-docs.vercel.app/logo.png"
                }
              }
            })
          }}
        />

      </>
    )
  },
  useNextSeoProps() {
    const { frontMatter } = useConfig()
    return {
      titleTemplate: '%s – Anima Unity Docs',
      defaultTitle: 'Anima Unity Documentation',
      description: frontMatter.description || 'Official documentation for Anima Unity',
      openGraph: {
        type: 'website',
        site_name: 'Anima Unity Docs'
      }
    }
  }
}

export default config