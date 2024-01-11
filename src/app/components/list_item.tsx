import Link from "next/link";

export default function ListItem({name,svg_name}:any){
    const name_v=name;
    const svg_v=svg_name;
    // const svg_name=parms.svg_name;
    if(name_v){
        console.log("hey")
    }
    console.log(name)
    return(
        <>
        <Link href={"#"}>
            <li className="p-3 flex relative text-lg hover:bg-gray-100 rounded-lg transition-all h-12">
                {/* <span className={` ${name ? "" : "hidden"}`}>{name}</span>  */}
                {name_v && <span>{name_v}</span>}
                <div className="absolute right-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d={svg_v} />
                </svg>
                </div>
            </li>
        </Link>
        </>
    )

}