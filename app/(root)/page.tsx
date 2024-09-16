import React from 'react'
import Link from 'next/link'

import { Container } from '@/components'

import HeroImage from '@/public/images/hero.png'

export default function Home() {
	return (
		<>
			<section
				style={{ backgroundImage: `url(${HeroImage.src})` }}
				className='relative h-screen bg-cover bg-no-repeat after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:bg-opacity-40'
			>
				<Container>
					<div className='flex flex-col items-center gap-y-7 absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
						<h1 className='flex flex-col whitespace-nowrap'>
							<span className='font-garamond font-light text-[110px] leading-[100%] uppercase text-silver ml-[13%]'>
								Flowers
							</span>
							<span className='font-garamond font-light text-[110px] leading-[100%] uppercase text-silver ml-[25%]'>
								delivery
							</span>
							<span className='font-garamond font-light text-[110px] leading-[100%] uppercase text-silver'>
								in London And UK
							</span>
						</h1>
						<p className='font-light text-[20px] leading-[130%] text-center text-light_grey max-w-[570px]'>
							Short text about our shop and than we deliver in London, can
							deliver same day, and have deliver for all Great Britain and
							something more
						</p>
						<div className='flex items-center gap-x-36'>
							<Link
								className='relative font-light text-2xl italic leading-[130%] text-white'
								href={''}
							>
								Go to shop
							</Link>
							<Link
								className='relative font-light text-2xl italic leading-[130%] text-white'
								href={''}
							>
								Order shiping
							</Link>
						</div>
					</div>
				</Container>
			</section>
		</>
	)
}
