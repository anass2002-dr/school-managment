import Link from "next/link"

export default function Message({name,message,picture}:any){
    const m_name=name
    const m_message=message
    const m_picture=picture
    return(
        <>
            <Link href={"#"} className='relative'>
                <li className="flex space-x-4 m-2">
                    <img
                        className={`rounded-full w-8 h-8`}
                            src={m_picture}
                            alt="Lin Lanying"
                            width={"25%"}
                            height={"25%"}
                    /> 
                    <div>
                        <p className='text-sm text-green-500'>{m_name}</p>
                        <p className='text-sm'>{m_message}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 absolute right-2 text-green-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </li>
            </Link>

        </>
    )
}