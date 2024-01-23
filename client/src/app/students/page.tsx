"use client"
import Image from 'next/image'
import TestGrid from '../components/testgrid'
import TestAnimation from '../components/testanimation'
import UserList from '../components/userList/userList'
import TestJson from '../components/test/testjson'
import ClassList from '../components/classList/classList'
import { useEffect, useState } from 'react'
import SimpleTable from '../components/tables/simpleTable'
import StudentTable from './studentTable'

export default function Students() {




  return (
    <>
      <StudentTable/>
    </>
  )
}
