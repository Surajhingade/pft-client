import React from 'react'
import {ChipIcon} from '@heroicons/react/outline'


const Header = () => {
  return (
    <div className='bg-[#F0F5F5] w-full py-4 items-center justify-between flex px-12 sticky top-0  ' >
            {/* search */}
            <div className='w-full lg:flex hidden space-x-4 items-center justify-start py-2' >
            </div>
            {/* logo */}
            <div className='items-center w-full justify-center flex space-x-4' >
                <ChipIcon className="w-6 h-6" />
                <h1 className='text-xl text-gray-800 font-medium'>PriFab Tyre</h1>
            </div>
            {/* icons */}
            <div className='items-center justify-end space-x-6 flex w-full' >
            </div>
    </div>
  )
}

export default Header

