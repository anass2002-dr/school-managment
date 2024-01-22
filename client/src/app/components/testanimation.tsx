"use client";
import style from "@/app/components/sidebare/sidebar.module.css";

import { useState } from 'react'
export default function TestAnimation(){
    const [animate,setanimate]=useState<boolean>(false)
    return(

        <>
            <button onClick={()=>setanimate(!animate)}>click to animate</button>
            <div className={animate ? style.test_animation_click:style.test_animation}>

            </div>
        </>
    )
}