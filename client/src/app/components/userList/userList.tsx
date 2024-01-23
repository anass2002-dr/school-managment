import { useEffect, useState } from "react"
import SimpleTable from "../tables/simpleTable"
import users from "@/app/data/student.json"
export default async function UserList(){
    const [student,setstudent]=useState<any>()


    useEffect(()=>{
        fetch('http://localhost:8080/api').then(
          response=>response.json()
        ).then(
          data=>{
            setstudent(data)
            console.log(data)
          }
        )

    },[])

    const listUser:string[]=[]
    const arr_user:Array<string[]>=new Array<string[]>()
    // await student.map((obj:any)=>{
    //     const list:Array<string>=new Array<string>()
    //     list.push(String(obj._id))
    //     list.push(String(obj.student_name))
    //     list.push(String(obj.age))
    //     list.push(String(obj.level))
    //     list.push(String(obj.classroom))
    //     arr_user.push(list)

    //     // listUser.push.apply(list)
    // })
    const thead=['Student id','student Name','Age','Level','classroom']
    // console.log(v_userlist)
    return(
    
        <SimpleTable thead={thead} data={arr_user} edit={true} remove={true}/>

    )
}