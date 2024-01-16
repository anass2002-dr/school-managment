export default function UserItems({userlist}:any){
    const v_userlist=userlist
    
    return(

    <>
           {/* {v_userlist.map((obj:any)=>{
            const key=Object.keys(obj)
            const objLength=Object.keys(obj).length
            for(var i=0 ;i<=objLength;i++){
                <td className="px-6 py-4" key={v_userlist.name}>
                    {obj.key[i]}
                </td>
            }
        })} */}
     

        <tr className="bg-white border-b hover:bg-gray-50">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap " key={v_userlist.id}>
                {v_userlist.id}
            </th>
            <td className="px-6 py-4" key={v_userlist.name}>
                {v_userlist.name}
            </td>
            <td className="px-6 py-4" key={v_userlist.age}>
                {v_userlist.age}
            </td>
            <td className="px-6 py-4" key={v_userlist.level}>
                {v_userlist.level}
            </td>
            <td className="px-6 py-4" key={v_userlist.class}>
                {v_userlist.class}
            </td>
            <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-600  hover:underline">Edit</a>
            </td>
        </tr>
    </>
    )
}