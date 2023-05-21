import React, { ReactNode } from 'react'
import Title from './Title'
import { LayoutProps } from '@/types/Types'

const Layout = ({children}: LayoutProps) => {
  return (
    <main className="bg-[#FEC128] text-white text-center">
        <Title text="Blog Posts" />
        <hr className='text-white m-2 border-[1px] border-white' />
        {children}
    </main>
  )
}

export default Layout