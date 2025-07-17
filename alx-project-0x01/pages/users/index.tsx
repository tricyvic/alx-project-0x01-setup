import UserCard from '@/components/common/UserCard'
import Header from '@/components/layout/Header'
import { UserProps } from '@/interfaces'
import React from 'react'

const index:React.FC<UserProps> = ({posts}) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
        <h1 className=" text-2xl font-semibold">User's Content</h1>
        <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {
            posts?.map(({id,name,username,email,address,phone,website}: UserProps, key: number) => (
              <UserCard id={id} name={name} username={username} email={email} address={address} phone={phone} website={website} key={key} />
            ))
          }
        </div>
      </main>
    </div>
  )
}
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default index