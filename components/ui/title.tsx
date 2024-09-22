import React from 'react'

interface Props {
	text: string
}

export const Title: React.FC<Props> = ({ text }) => {
	return (
		<h3 className='font-garamond uppercase font-light text-[64px] mb-7 leading-[100%] max-w-[425px] text-black'>
			{text}
		</h3>
	)
}
