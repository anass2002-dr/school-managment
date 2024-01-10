import Link from "next/link";

export default function ListItem({name,svg_name}:any){
    // const name=parms.name;
    // const svg_name=parms.svg_name;
    return(
        <>
        <Link href={"#"}>
            <li className="p-3 flex relative text-lg hover:bg-gray-100 rounded-lg transition-all h-12">
                <span>{name}</span> 
                <div className="absolute right-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d={svg_name} />
                </svg>
                </div>
            </li>
        </Link>
        </>
    )

}