import React from 'react'
import type { Metadata } from 'next'
import { Header } from '@/components'

export const metadata: Metadata = {
	title: 'Floritta | Main'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	)
}
