"use client"
import style from '@/app/components/sidebar.module.css'
import { useState } from 'react'
export default function SideBar2(){
    const [display,setdisplay]=useState<boolean>(true)
    
    return(
        <>
            <div className={(display ? style.sidebar :style.hide_sidebar )+" bg-white shadow-lg m-5 p-5 rounded-lg "}>
                <ul className='list-none'>
                    <li className='relative' >
                        <button className='absolute right-0 bg-gray-100 p-2 rounded-lg' onClick={()=>setdisplay(!display)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d={`${display ?"M6 18 18 6M6 6l12 12":"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}`} />
                            </svg>
                        </button>
                    </li>
                    <li className=''>
                        <span>New Student</span>
                        <div className="absolute right-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                    </li>

                </ul>
            </div>
        </>
    )
}