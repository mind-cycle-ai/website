import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { DESCRIPTION, COMPANY_NAME } from '@/constants'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: `%s - ${COMPANY_NAME}`,
    default: COMPANY_NAME,
  },
  description: DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
