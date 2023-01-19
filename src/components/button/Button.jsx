export default function Button({children , ...rest}) {
  return (
    <button className='bg-red-700 py-[20px] w-full font-black' {...rest}>
      {children}
    </button>
  )
}
