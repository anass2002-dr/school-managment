import Students from "@/app/students/page";
import { error } from "console";
import { useEffect } from "react"

async function loadingStudent(){
    try{
        const res=await fetch("http://localhost:8080/api",{cache:"no-store"});
        if(!res.ok){
            throw new Error("failed to fetch users");
        }
        return res.json();
    }
    catch(err){
        console.log(err)
    }
}
export default async function StudentTable(){
    const student=await loadingStudent()
    return(
        <table className="w-full text-sm text-left rtl:text-right bg-white text-gray-500 p-3">
            <thead className="text-xs text-gray-700  uppercase rounded-lg bg-gray-100">
                <tr>
                    <th scope="col" className="px-6 py-3">
                       Student Id 
                    </th>
                    <th scope="col" className="px-6 py-3">
                       Student Name 
                    </th>
                    <th scope="col" className="px-6 py-3">
                       Age
                    </th>
                    <th scope="col" className="px-6 py-3">
                       level
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ClassRoom 
                    </th>
                <th scope="col" colSpan={3} className="px-6 py-3"></th>
                   
                </tr>
            </thead>
            <tbody className="uppercase">
                
                {student.map((obj:any)=>
                    <tr className="bg-white border-b hover:bg-gray-50">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {obj._id}
                        </th>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {obj.student_name}
                        </th>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {obj.age}
                        </th>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {obj.level}
                        </th>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                            {obj.classroom}
                        </th>  
                    </tr>
                )}

            </tbody>
        </table>
    )
}