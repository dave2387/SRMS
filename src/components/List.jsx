import React from 'react'
import { users } from './data'
import Sidebar from './Sidebar'

function List() {
  return (
    <>
        <Sidebar />

      <div className="app-content">
        <h2>User List</h2>

        {users.map((user, index) => (
          <div key={index}>
            {user.name} - {user.email}
          </div>
        ))}
      </div>
    </>
  )
}

export default List
