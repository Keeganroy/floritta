import React from 'react'
import { Container, ProductCard, Title } from '@/components'

interface Props {
	title: string
	items: any[]
}

export const ProductGroupList: React.FC<Props> = ({ items, title }) => {
	return (
		<div>
			<Container>
				<Title text={title} />
				<div className='grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-y-12 gap-x-5'>
					{items?.map((item: any) => (
						<ProductCard
							key={item.id}
							id={item.id}
							imageUrl={item.imageUrl}
							name={item.name}
							currentPrice={item.currentPrice}
						/>
					))}
				</div>
			</Container>
		</div>
	)
}
