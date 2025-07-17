import { UserProps } from '@/interfaces'
import React from 'react'

const UserCard:React.FC<UserProps> = ({id,name,username,email,address,phone,website}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      </div>
        <p className="text-gray-600">Username: {username}</p>
        <p className="text-gray-600">Email: {email}</p>
        <p className="text-gray-600">Phone: {phone}</p>
        <p className="text-gray-600">Website: {website}</p>
        <p className="text-gray-600">Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>User ID: {id}</span>
      </div>
    </div>
  )
}

export default UserCard