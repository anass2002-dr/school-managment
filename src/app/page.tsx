import Image from 'next/image'
import TestGrid from './components/testgrid'
import TestAnimation from './components/testanimation'
import UserList from './components/userList/userList'
import TestJson from './components/test/testjson'
import ClassList from './components/classList/classList'

export default function Home() {

  return (
    <>
      <div className="flex space-x-4">
          <div className="basis-1/2 bg-white rounded-lg shadow-lg">
              <UserList />
          </div>
          <div className="basis-1/2 bg-white rounded-lg shadow-lg">
              <UserList />
          </div>
          
      </div>
      <ClassList/>
    </>
  )
}
