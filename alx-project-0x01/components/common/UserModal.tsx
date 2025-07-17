import { UserData, UserModalProps } from '@/interfaces'
import React, { useState } from 'react'

const UserModal:React.FC<UserModalProps> = ({onClose,onSubmit}) => {
    const [user, setUser] = useState<UserData>({
        id: 1,
        name: "John Doe",
        username: "johndoe",
        email: "johndoe@email.com",
        phone: "123-456-7890",
        website: "johndoe.com",
      });

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
      };
        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            onSubmit(user);
            onClose();
        };
  return (
    <div>
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Add User</h3>
                <form onSubmit={(e) => {
                e.preventDefault();
                onSubmit(user);
                onClose();
                }}>
                <input type="text" placeholder="Name" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} className="w-full p-2 border rounded mb-2" />
                <input type="text" placeholder="Username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} className="w-full p-2 border rounded mb-2" />
                <input type="email" placeholder="Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="w-full p-2 border rounded mb-2" />
                <input type="text" placeholder="Phone" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} className="w-full p-2 border rounded mb-2" />
                <input type="text" placeholder="Website" value={user.website} onChange={(e) => setUser({ ...user, website: e.target.value })} className="w-full p-2 border rounded mb-2" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
                </form>
                <button onClick={onClose} className="mt-4 text-red-500">Close</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default UserModal;