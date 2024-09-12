import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from './container'
import {
	BY_FLOWERS,
	DELIVERY,
	FOR_USER,
	LEGAL_DOCUMENTS,
	OCCASIONS,
	PAYMENTS_IMG,
	SUBCRIPTION
} from '@/constants'

export const Footer: React.FC = () => {
	return (
		<footer>
			<Container>
				<div className='flex flex-col gap-y-12 bg-silver p-24 mb-10'>
					<div className='flex justify-between gap-8 flex-wrap'>
						<ul>
							<h3 className='font-jost text-black text-lg leading-[130%] mb-2'>
								Delivery
							</h3>
							{DELIVERY?.map((item) => (
								<li className='mb-2 last:mb-0' key={item.id}>
									<Link
										className='font-jost text-black font-thin'
										href={item.link}
									>
										{item.text}
									</Link>
								</li>
							))}
						</ul>
						<ul>
							<h3 className='font-jost text-black text-lg leading-[130%] mb-2'>
								Subscription
							</h3>
							{SUBCRIPTION?.map((item) => (
								<li className='mb-2 last:mb-0' key={item.id}>
									<Link
										className='font-jost text-black font-thin'
										href={item.link}
									>
										{item.text}
									</Link>
								</li>
							))}
						</ul>
						<ul>
							<h3 className='font-jost text-black text-lg leading-[130%] mb-2'>
								By flowers
							</h3>
							{BY_FLOWERS?.map((item) => (
								<li className='mb-2 last:mb-0' key={item.id}>
									<Link
										className='font-jost text-black font-thin'
										href={item.link}
									>
										{item.text}
									</Link>
								</li>
							))}
						</ul>
						<ul>
							<h3 className='font-jost text-black text-lg leading-[130%] mb-2'>
								Occasions
							</h3>
							{OCCASIONS?.map((item) => (
								<li className='mb-2 last:mb-0' key={item.id}>
									<Link
										className='font-jost text-black font-thin'
										href={item.link}
									>
										{item.text}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className='flex justify-between flex-wrap gap-8 max-w-[80%]'>
						<ul>
							<h3 className='font-jost text-black text-lg leading-[130%] mb-2'>
								For user
							</h3>
							{FOR_USER?.map((item) => (
								<li className='mb-2 last:mb-0' key={item.id}>
									<Link
										className='font-jost text-black font-thin'
										href={item.link}
									>
										{item.text}
									</Link>
								</li>
							))}
						</ul>
						<ul>
							<h3 className='font-jost text-black text-lg leading-[130%] mb-2'>
								Legal documents
							</h3>
							{LEGAL_DOCUMENTS.map((item) => (
								<li className='mb-2 last:mb-0' key={item.id}>
									<Link
										className='font-jost text-black font-thin'
										href={item.link}
									>
										{item.text}
									</Link>
								</li>
							))}
						</ul>
						<div className='font-jost text-black font-thin mt-auto'>
							Floritta Ltd <br /> VAT No. - 1234567890 <br /> Registration No. –
							12345678
						</div>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center gap-2 mb-5'>
					<ul className='flex items-center gap-3'>
						{PAYMENTS_IMG?.map((item) => (
							<li key={item.id}>
								<Image src={item.imgUrl} alt='payment' />
							</li>
						))}
					</ul>
					<p className='font-jost text-black font-thin'>
						© 2023, Floritta Flowers London
					</p>
				</div>
			</Container>
		</footer>
	)
}
