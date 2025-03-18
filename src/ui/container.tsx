import React from 'react'

import '../App.css'

export const Container = ({ children }: { children: React.ReactNode }) => {
	return <div className='container'>{children}</div>
}
