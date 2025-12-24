import React from 'react'
import Sidebar from './Sidebar'

function Edit() {
  return (
    <>
      <Sidebar />
      <div className="app-content">
        <input type="email" placeholder='Enter email' /><br />
        <input type="text" placeholder='Enter name' />
        <br /><br />
        <button>SUBMIT</button></div>
    </>
  )
}

export default Edit
