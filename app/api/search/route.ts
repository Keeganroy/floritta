import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/prisma/prisma-client'

export async function GET(req: NextRequest) {
	const query = req.nextUrl.searchParams.get('query') || ''

	const products = await prisma.product.findMany({
		where: {
			name: {
				contains: query,
				mode: 'insensitive'
			}
		},
		include: {
			variants: {
				select: {
					currentPrice: true
				}
			}
		},
		take: 3
	})
	return NextResponse.json(products)
}
