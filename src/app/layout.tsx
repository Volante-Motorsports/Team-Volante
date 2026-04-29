import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Volante Motorsports',
  description: 'team-Volante is a racing club from Ramaiah Institute of Technology, Bangalore, specializing in e-kart buggies and go-karts. We have won several national competitions and continue to push the boundaries of electric vehicle innovation.',
  keywords: 'Team-Volante,Team-volante,MSRIT, Racing Club, Ramaiah Institute of Technology, Bangalore, E-Kart, Go-Kart, electric buggies, engineering competitions, automotive innovation, student racing club, eBAJA, SAE competitions',
  authors: [{ name: 'team-Volante Racing Club, Harshendram' }],
  openGraph: {
    title: 'Volante Motorsports',
    description: 'Team-Volante Racing Club specializes in building e-kart buggies and go-karts, winning multiple national competitions. Learn more about our journey in automotive innovation.',
    images: ['/imagesvolante/aboutus.jpg'],
    url: 'https://volante-motorsports-main.vercel.app',
    type: 'website',
    
  },
  icons: {
    icon: [
      { url: '/imagesvolante/favicon_io (2)/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/imagesvolante/favicon_io (2)/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/imagesvolante/favicon_io (2)/favicon.ico' }
    ],
    apple: [
      { url: '/imagesvolante/favicon_io (2)/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  manifest: '/imagesvolante/favicon_io (2)/site.webmanifest',
  verification: {
    google: 'mTGdo0YVo7guwOeOs4K9Fz1Yq9SUTxfoq2xrMpmR9Cg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Redirect script for client-side routing on GitHub Pages */}
        <script src="/redirect-script.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Orbitron:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.9.30/build/spline-viewer.js"
        ></script>
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}