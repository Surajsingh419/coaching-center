import type { Metadata } from 'next'
import './globals.css'
//add new comment

export const metadata: Metadata = {
  title: 'Momentum Institute Lakhimpur | Best Coaching for IIT-JEE & NEET',
  description: 'Join Momentum Institute Lakhimpur for top-quality IIT-JEE and NEET preparation. Experienced faculty, small batch sizes, and proven results. Admissions Open 2026!',
  keywords: ['IIT-JEE coaching', 'NEET preparation', 'coaching institute Lakhimpur', 'Momentum Institute', 'JEE coaching UP', 'NEET coaching Uttar Pradesh'],
  authors: [{ name: 'Momentum Institute Lakhimpur' }],
  openGraph: {
    title: 'Momentum Institute Lakhimpur | Best Coaching for IIT-JEE & NEET',
    description: 'Join Momentum Institute for IIT-JEE and NEET Success. Admissions Open 2026!',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
