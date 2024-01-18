import SimpleTable from "../tables/simpleTable"
import users from "@/app/api/student.json"
export default function UserList(){
    const v_users=[
        {
            id:2654565,
            name:"anass dermaj",
            age:21,
            level:"B",
            class:"ts2"
        },
        {
            id:211168,
            name:"hamid batri",
            age:17,
            level:"f",
            class:"ts10"
        },
        {
          id:2654565,
          name:"anass dermaj",
          age:21,
          level:"B",
          class:"ts2"
      },
      {
          id:211168,
          name:"hamid batri",
          age:17,
          level:"f",
          class:"ts10"
      },
      {
        id:2654565,
        name:"anass dermaj",
        age:21,
        level:"B",
        class:"ts2"
    },
    {
        id:211168,
        name:"hamid batri",
        age:17,
        level:"f",
        class:"ts10"
    },
    {
      id:2654565,
      name:"anass dermaj",
      age:21,
      level:"B",
      class:"ts2"
    },
    {
      id:211168,
      name:"hamid batri",
      age:17,
      level:"f",
      class:"ts10"
    },
    ]
    const listUser:string[]=[]
    const arr_user:Array<string[]>=new Array<string[]>()
    users.map((obj)=>{
        const list:Array<string>=new Array<string>()
        list.push(String(obj.id))
        list.push(String(obj.name))
        list.push(String(obj.age))
        list.push(String(obj.level))
        list.push(String(obj.class))
        arr_user.push(list)

        // listUser.push.apply(list)
    })
    const thead=['Student id','student Name','Age','Level','Class']
    // console.log(v_userlist)
    return(
    
        <SimpleTable thead={thead} data={arr_user} edit={true} remove={true}/>

    )
}