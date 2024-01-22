"use client"
import Image from 'next/image'
import TestGrid from './components/testgrid'
import TestAnimation from './components/testanimation'
import UserList from './components/userList/userList'
import TestJson from './components/test/testjson'
import ClassList from './components/classList/classList'
import { useEffect, useState } from 'react'

export default function Home() {
  const [backdata,setbackdata]=useState<any>("loading");
  useEffect(()=>{
      const resp=fetch('http://localhost:8080/api').then(
        response=>response.json()
      ).then(
        data=>{
          console.log(data)
          setbackdata(data)
        }
      )
  },[])
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
      {/* <p>{typeof(backdata)}</p> */}
    </>
  )
}
