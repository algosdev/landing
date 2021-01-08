import Head from 'next/head'

export default function SEO({ title, description, image, keywords }) {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <title>{title ? `${title} | WebSiteName` : `WebSiteName`}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta property='og:type' content='website' />
      <meta
        property='og:title'
        content={title ? `${title} | WebSiteName` : `WebSiteName`}
        key='ogtitle'
      />
      <meta property='og:description' content={description} key='ogdesc' />
      <meta property='og:site_name' content='WebSiteName' key='ogsitename' />
      <meta
        property='og:image'
        content={image || 'images/banner_bg1.jpg'}
        key='ogimage'
      />

      <meta name='twitter:card' content='summary' />
      <meta
        name='twitter:title'
        content={title ? `${title} | WebSiteName` : `WebSiteName`}
      />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:site' content='WebSiteName' />
      <meta name='twitter:creator' content='Algo' />
      <meta name='twitter:image' content={image || 'images/banner_bg1.jpg'} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
