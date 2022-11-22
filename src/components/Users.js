import { NavLink, Routes, Route, Outlet } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from 'axios'
import User from './User';

function Users() {
  const active = {
    color: "white",
    backgroundColor: "black",
    padding: 1

  }

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <h2>Users</h2>
      {loading && <div>Loading...</div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink to={`/users/${user.id}`} style={({ isActive }) => isActive ? active : undefined}>{user.name}</NavLink>
          </li>
        ))}
      </ul>

      <Outlet />

      <Routes>
        <Route path="/:id" element={<User />} />
      </Routes>
    </div>
  )
}

export default Users