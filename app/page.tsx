import Link from "next/link"
import Form from "./form"

async function getPosts() {
  const res= await fetch(`${process.env.BASE_URL}/api/getposts`)
  if(!res.ok){
    console.log(res)
  }
  return res.json()
}

export default async function Home() {
  const data:{id: number; title: string}[] = await getPosts()
  console.log(data)
  return (
    <main className=" w-screen h-screen flex flex-col align-center items-center">
      <Form/>
      <div className="w-full h-full overflow-auto flex flex-col items-center">
        {data.map((post) => (
          <div className="text-lg px-5 py-6 border-2 border-teal-200 my-6 w-10/12" key={post.id}>{post.title}</div>
        ))}
      </div>
    </main>
  )
}
