import React from 'react'

const CustomPageBanner = ({title, path}) => {
  return (
    <div className='py-24 mt-3 bg-[#FAFAFA] rounded flex items-center justify-center'>
        <div>
            <h2 className='text-4xl text-orange-400 font-extralight mb-1 text-center'>{title}</h2>
            <p className='text-medium text-center font-sans'><a href='/'>Home</a> / {path}</p>
        </div>
    </div>
  )
}

export default CustomPageBanner