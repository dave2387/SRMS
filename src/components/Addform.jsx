import React from 'react'
import Sidebar from './Sidebar'

function AddForm() {
  return (
    <>
      <div className="app-content">
        <h2>Add User</h2>
        <input type="text" placeholder="Name" /><br /><br />
        <input type="email" placeholder="Email" /><br /><br />
        <button type="button" onClick={() => alert("User Added (Dummy)")}>
          Add
        </button>
      </div>
    </>
  )
}

export default AddForm