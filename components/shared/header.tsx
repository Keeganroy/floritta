import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Container } from './container'
import { NAV_LIST } from '@/constants'

import Logo from '@/public/images/logo.svg'
import SearchIcon from '@/public/images/search.svg'
import CartIcon from '@/public/images/cart.svg'
import HeartIcon from '@/public/images/heart.svg'
import UserIcon from '@/public/images/user.svg'

export const Header: React.FC = () => {
	return (
		<header className='absolute top-5 left-0 right-0 z-20'>
			<Container>
				<div className='flex items-center justify-between gap-4'>
					<Image src={Logo} width={150} height={20} alt='logo' priority />
					<nav>
						<ul className='flex items-center gap-12'>
							{NAV_LIST?.map((item) => (
								<li key={item}>
									<Link
										className='font-jost font-light text-white leading-5 whitespace-nowrap capitalize'
										href={`/${item}`}
									>
										{item}
									</Link>
								</li>
							))}
						</ul>
					</nav>
					<ul className='flex items-center gap-4'>
						<Image src={SearchIcon} alt={'search'} />
						<li>
							<Link href={''}>
								<Image src={HeartIcon} width={24} height={24} alt='favorites' />
							</Link>
						</li>
						<Image src={CartIcon} alt={'cart'} />
						<li>
							<Link href={''}>
								<Image src={UserIcon} width={24} height={24} alt='user' />
							</Link>
						</li>
					</ul>
				</div>
			</Container>
		</header>
	)
}
