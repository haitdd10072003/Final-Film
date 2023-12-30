// UserList.tsx
import React, { useState } from 'react';
import { User } from './User';

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const [userList, setUserList] = useState(users);

  const handleDelete = (userId: number) => {
    const updatedUserList = userList.filter((user) => user.id !== userId);
    setUserList(updatedUserList);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Username</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Password</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id} className="bg-gray-100">
                <td className="py-2 px-4 border text-center">{user.id}</td>
                <td className="py-2 px-4 border text-center">{user.username}</td>
                <td className="py-2 px-4 border text-center">{user.email}</td>
                <td className="py-2 px-4 border text-center">{user.password}</td>
                <td className="py-2 px-4 border text-center">
                  <button
                    className="text-white bg-red-500 hover:bg-red-700 px-2 py-1 rounded"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
