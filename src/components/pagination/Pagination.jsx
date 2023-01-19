import React from 'react'

export default function Pagination({ nPages, currentPage, setCurrentPage }) {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

    return (
        <ul className='flex w-4/4 flex-wrap justify-center'>
            {
                pageNumbers.map(item => {
                    return (
                        <li
                            key={item}
                            onClick={() => setCurrentPage(item)}
                            className={`px-[20px] py-[10px] cursor-pointer ${currentPage == item ? 'bg-red-700 text-white' : "bg-white text-black"}`}
                        >
                            {item}
                        </li>
                    )
                })
            }
        </ul>
    )

}
