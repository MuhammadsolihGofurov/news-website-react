
export default function Input({ placeholder , state , setState , width  } ) {
  return (
    <input 
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        className={`p-[20px] focus:outline-red-700 text-black ${width}`}
        placeholder={placeholder}
    />
  )
}
