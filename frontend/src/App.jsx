import {useEffect, useState} from 'react'
import './App.css'

function App() {

    const [users, setUsers] = useState([]);

    const url = "http://localhost:8080/api/users";
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setUsers(data);

            })
    }, []);

  return (
    <>
      <h1>React Frontend</h1>

        <h2>Did this work</h2>
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Active</th>
            </tr>
            </thead>
            <tbody>
            { users.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.active ? "Active" : "Inactive"}</td>
                </tr>))}
            </tbody>

        </table>

    </>
  )
}

export default App
