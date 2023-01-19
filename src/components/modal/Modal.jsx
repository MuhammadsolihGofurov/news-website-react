import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeModal } from '../../slice/modal';

export default function Modal() {
    const { isOpen , text } = useSelector(state => state.modal);
    const dispatch = useDispatch();

    const closeModal = useCallback(() => {
        dispatch(changeModal())
    } , [])

    return (
        <div className={`${isOpen ? "block" : "hidden" } 
        fixed z-50 w-full h-screen bg-red-900 top-0 left-0`}>
            <div className='w-full h-screen flex flex-col justify-center items-center text-center'>
                <h2 className='font-black text-xl mb-[10px]'>
                    { text }
                </h2>
                <button className='bg-white text-black font-bold py-[10px] px-[20px]' onClick={closeModal}>
                    Close Modal
                </button>
            </div>
        </div>
    )
}
