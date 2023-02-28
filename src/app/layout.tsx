import './globals.css';

export const metadata = {
  title: 'Paul´s Portfolio',
  description: 'Hi, I am Paul! A passionate Blockchain Dev form Austria. Let´s see how we can work together',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      </head>
      <body>{children}</body>
    </html>
  )
};
