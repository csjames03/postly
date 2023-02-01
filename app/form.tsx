"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
export default function Form(){
    const [title, setTitle] = useState("")
    const router = useRouter()

    
    async function submitPost(e: React.FormEvent) {
        e.preventDefault()
        const data = await fetch(`api/createpost`,{
            method: "POST",
            body: JSON.stringify({ title })
        })
        const res = await data.json()
        setTitle("")
        router.refresh()
        if(!res.ok){
            console.log(res)
        }
    }
    return(
        <form onSubmit={submitPost} className="self-center w-full flex justify-center m-10">
            <input
            onChange={(e)=>{setTitle(e.target.value)}}
            value = {title}
            type="text" className="p-4 w-full md:w-6/12 " />
            <button className="p-4 bg-teal-800 " type="submit">Post</button>
        </form>
    )
}