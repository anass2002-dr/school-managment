import { ReactElement } from "react"
import UserItems from "../userList/items"

export default function SimpleTable({thead,data}:any){
    const v_thead:string[]=thead
    const v_data:Array<string[]>=data
    return(
        <>
        <table className="w-full text-sm text-left rtl:text-right bg-white text-gray-500 p-3">
            <thead className="text-xs text-gray-700  uppercase rounded-lg bg-gray-100">
                <tr>
                    {
                    v_thead.map((th)=>
                        (
                            <th scope="col" className="px-6 py-3">
                            {th}
                        </th>
                        )
                    )
                    }
                   
                </tr>
            </thead>
            <tbody className="uppercase">
                {v_data.map((obj, index) => (
                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                    {obj.map((item, i) => (
                        <th key={i} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {item}
                        </th>
                    ))}
                    { }
                    </tr>
                ))}
            </tbody>

        </table>
        {/* <p>{v_data.map((obj)=>
            
                obj[1]
                
                )
            }
    </p> */}
        </>
    )
}