
"use client";
import '@/app/components/navbar/navbar.css';
import { useState } from 'react';
export default function Navbar(){
    const [displaychat,setdisplaychat]=useState<boolean>(false);
    return(
        <>
            <div className=" relative bg-white shadow-lg m-5 p-5 rounded-lg">
                <div className="w-8">
                    <img src="https://www.getautismactive.com/wp-content/uploads/2021/01/Test-Logo-Circle-black-transparent.png" alt="" className="" />
                </div>
                <ul className="list-none absolute bottom-4 right-4 flex space-x-4">
                    <li>
                       <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-blue-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </button> 
                    </li>

                    <li>
                    <button onClick={()=>setdisplaychat(!displaychat)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                    </svg>
                    </button>

                    </li>
                    <li>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                            </svg>
                        </button>
                        

                    </li>
                </ul>
            </div>

            {displaychat ? <ul className={`bg-white shadow-lg m-2 p-2 rounded-lg chat absolute right-5 top-25`}>
                <li className="flex space-x-4 m-2">
                    <img
                        className={`rounded-full w-8 h-8`}
                            src="https://i.imgur.com/1bX5QH6.jpg"
                            alt="Lin Lanying"
                            width={"25%"}
                            height={"25%"}
                    /> 
                    <span>Mohamed aiach</span>
                </li>
                <li className="flex space-x-4 m-2">
                    <img
                        className={`rounded-full w-8 h-8`}
                            src="https://i.imgur.com/1bX5QH6.jpg"
                            alt="Lin Lanying"
                            width={"25%"}
                            height={"25%"}
                    /> 
                    <span>Mohamed aiach</span>
                </li>
            </ul> : ""}
        </>
    )
}
// motion framer for next js animation