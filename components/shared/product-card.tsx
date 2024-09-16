import React from 'react'
import Link from 'next/link'

interface Props {
	id: number
	imageUrl: string
	name: string
	currentPrice: number
	oldPrice?: number
}

export const ProductCard: React.FC<Props> = ({
	id,
	imageUrl,
	name,
	currentPrice,
	oldPrice
}) => {
	return (
		<div className='group max-w-[320px]'>
			<div className='overflow-hidden'>
				<img
					className='h-[320px] w-[320px] object-cover group-hover:object-none group-hover:scale-105 duration-300'
					src={imageUrl}
					alt={name}
				/>
			</div>
			<div className='border-[1px] border-t-0 border-[#ececec] p-1'>
				<div className='flex flex-col'>
					<div className='flex items-center justify-between mt-1 mb-2.5 text-lg leading-[130%] text-black'>
						<h4>{name}</h4>
						<div className='flex items-center gap-x-2'>
							{oldPrice && (
								<p className='line-through text-grey text-base'>£ {oldPrice}</p>
							)}
							<p>£ {currentPrice}</p>
						</div>
					</div>
					<p className='line-clamp-2 font-light text-sm leading-[130%] text-graphite mb-5'>
						Perfect white product for your friend or partner or mother or
						daughter or cat or ghost or man from post or why you read this just
						enough
					</p>
				</div>
				<div className='flex items-center justify-between text-black'>
					<Link
						className='italic font-light leading-[130%] text-black'
						href={`/product/${id}`}
					>
						Learn more
					</Link>
					<button className='italic font-light leading-[130%] text-black'>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	)
}
