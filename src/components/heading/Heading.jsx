import React from 'react'

export default function Heading({children , ...rest}) {
  return (
    <div className='font-black text-xl text-center'  {...rest}>
        <span className='heading'>
          {children}
        </span>
    </div>
  )
}
