import React from 'react'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components'

const jost = Jost({
	subsets: ['latin'],
	variable: '--font-jost',
	weight: ['300', '400']
})

const cormorant_garamond = Cormorant_Garamond({
	subsets: ['latin'],
	variable: '--font-cormorant-garamond',
	weight: ['300']
})

export const metadata: Metadata = {
	title: 'Floritta',
	description: 'Flowers delivery in London and UK'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='' sizes='any' />
			</head>
			<body className={`${jost.variable} ${cormorant_garamond.variable}`}>
				{children}
				<Footer />
			</body>
		</html>
	)
}
