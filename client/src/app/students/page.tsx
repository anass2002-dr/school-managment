"use client"
import Image from 'next/image'
import TestGrid from '../components/testgrid'
import TestAnimation from '../components/testanimation'
import UserList from '../components/userList/userList'
import TestJson from '../components/test/testjson'
import ClassList from '../components/classList/classList'
import { useEffect, useState } from 'react'

export default function Students() {
  const [backdata,setbackdata]=useState<any>();
  async function loadingdt() {
      await fetch('http://localhost:8080/api').then(
        response=>response.json()
      ).then(
        data=>{
          setbackdata(data)
         }
      )
  }
    useEffect(()=>{
        fetch('http://localhost:8080/api').then(
          response=>response.json()
        ).then(
          data=>{
            setbackdata(data)
            console.log(data)

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
      <button onClick={loadingdt} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>fetch data</button>
      <p>{
          backdata ?
          (backdata.map((obj:any)=>
            <span>{obj.student_name} <br></br></span>
            
            )) : ("data is loadinggg .....")

        }
        </p>
    </>
  )
}
