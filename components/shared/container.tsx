import React from 'react'

export const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
	return <div className='max-w-[1400px] px-[30px] mx-auto'>{children}</div>
}
