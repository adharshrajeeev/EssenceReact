import React from 'react'
import NavBar from '../components/Navbar'
import AdminChart from '../components/AdminChart'


function AdminPage() {
  return (
    <div>
        <header>
            <NavBar/>
        </header>
        <main>
            <AdminChart/>
        </main>
    </div>
  )
}

export default AdminPage