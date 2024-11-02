'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Api } from '@/services/api-client'
import {
	useClickAway,
	useDebounce,
	useLockBodyScroll,
	useToggle
} from 'react-use'
import { Container } from '@/components'
import { Product } from '@prisma/client'

import SearchIcon from '@/public/images/search.svg'
import CloseIcon from '@/public/images/close.svg'

interface Variant {
	currentPrice: number
}

interface ProductWithVariants extends Product {
	variants: Variant[]
}

export const SearchInput: React.FC = () => {
	const [items, setItems] = React.useState<ProductWithVariants[]>([])
	const [isOpen, setIsOpen] = React.useState<boolean>(false)
	const [searchValue, setSearchValue] = React.useState<string>('')
	const [locked, toggleLocked] = useToggle(false)
	const [debouncedValue, setDebouncedValue] = React.useState('')
	const ref = React.useRef<HTMLDivElement>(null)

	useLockBodyScroll(locked)

	const handleClose = () => {
		setIsOpen(false)
		setItems([])
		setSearchValue('')
		toggleLocked(false)
	}

	const handleOpen = () => {
		setIsOpen(true)
		toggleLocked(true)
	}

	useClickAway(ref, handleClose)

	useDebounce(
		async () => {
			try {
				const data = (await Api.products.search(
					searchValue
				)) as ProductWithVariants[]

				setDebouncedValue(searchValue)
				setItems(data)
			} catch (e) {
				console.log(e)
			}
		},
		1000,
		[searchValue]
	)

	return (
		<>
			{isOpen && (
				<div className='absolute h-screen w-full -top-5 left-0 bg-black opacity-75 z-0' />
			)}

			<button className='cursor-pointer z-10' onClick={handleOpen}>
				<Image src={SearchIcon} alt='search icon' />
			</button>

			{isOpen && (
				<div className='bg-white absolute -top-5 left-0 right-0 z-10' ref={ref}>
					<Container>
						<div className='flex items-center justify-between gap-2.5 pb-6 pt-5'>
							<input
								className='w-full text-grey font-light border-b border-grey outline-none'
								type='text'
								placeholder='Search'
								value={searchValue}
								onChange={(e) => setSearchValue(e.target.value)}
							/>
							<Image
								className='cursor-pointer'
								src={CloseIcon}
								alt='close icon'
								onClick={handleClose}
							/>
						</div>

						{items.length > 0 && searchValue && (
							<>
								<ul className='flex flex-col bg-white gap-y-7 mr-[30px] pb-7'>
									{items?.map((item) => (
										<li
											className='pb-8 border-b border-silver'
											key={item.id}
											onClick={handleClose}
										>
											<Link
												className='flex gap-2.5'
												href={`/product/${item.id}`}
											>
												<img
													className='w-[100px] h-[100px] object-cover'
													src={item.imageUrl}
													alt={item.name}
												/>
												<div className='flex flex-col justify-between justify-items-start text-black leading-[130%]'>
													<h4>{item.name}</h4>
													<p>£ {item.variants[0]?.currentPrice}</p>
												</div>
											</Link>
										</li>
									))}
								</ul>
								<div className='pb-7'>
									<Link className='font-light text-2xl italic' href={''}>
										View all
									</Link>
								</div>
							</>
						)}
					</Container>
				</div>
			)}
		</>
	)
}
