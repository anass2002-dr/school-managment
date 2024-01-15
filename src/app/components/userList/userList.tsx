import UserItems from "./items"

export default function UserList(){
    const users=[
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
    // console.log(v_userlist)
    return(
        <table className="w-full text-sm text-left rtl:text-right bg-white text-gray-500 p-3">
        <thead className="text-xs text-gray-700  uppercase rounded-lg bg-gray-100">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Student ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Student name
                </th>
                <th scope="col" className="px-6 py-3">
                    Age
                </th>
                <th scope="col" className="px-6 py-3">
                    Level
                </th>
                <th scope="col" className="px-6 py-3">
                    Class
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody className="uppercase">
            {
                users.map((user)=>
                <UserItems userlist={user} key={user.id}/>
                )
            }
            
        </tbody>
    </table>
    )
}