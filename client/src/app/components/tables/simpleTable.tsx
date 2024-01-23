import Link from "next/link"
import { ReactElement } from "react"



function items(dt:string[],ed:boolean){
    const v_ed=ed

    return (
        <>
            {dt.map((item, i) => (
            <th key={i} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {item}
            </th>
            
            ))}
           {ed==true ?<th><Link href={"#"}>edit</Link></th> :''}
        </>
    )
}
export default function SimpleTable({thead,data,edit,remove}:any){
    const v_thead:string[]=thead
    const v_data:Array<string[]>=data
    const v_edit=edit
    const v_delete=remove
    {data ? data.map((obj:any)=>console.log(obj.student_name)) : console.log('loading...')}
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
                    <th scope="col" colSpan={3} className="px-6 py-3"></th>
                   
                </tr>
            </thead>
            <tbody className="uppercase">

                    {
                        v_data ?
                        v_data.map((obj:any)=>(
                            <tr className="bg-white border-b hover:bg-gray-50">
                                {
                                   obj ? obj.map((ob:any)=>(
                                        <>
                                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{ob._id}</td>
                                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{ob.student_name}</td>
                                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{ob.age}</td>
                                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{ob.level}</td>
                                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{ob.classroom}</td>
                                        </>
                                    ))
                                    :""
                                }
                            </tr>
                        ))
                        :""
                    }


                {/* {v_data ? v_data.map((obj, index) => (
                    

                    <tr key={index} className="bg-white border-b hover:bg-gray-50">
                        {obj ? obj.map((item, i) => (
                        <th key={i} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {item}
                        </th>
                        
                        )) :""}
                        {v_edit==true ?<th><Link href={"#"} className="text-green-500">Edit</Link></th> :''}
                        {v_delete==true ?<th><Link href={"#"} className="text-red-500">Delete</Link></th> :''}                 
                    
                    </tr>
                )) : ""} */}
            </tbody>

        </table>
        
        </>
    )
}