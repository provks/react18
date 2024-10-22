import { useEffect, useState } from 'react'
import useFetch from './useFetch'

function ComponentA() {
    // const [users, setUsers] = useState([]);
    const [users] = useFetch('https://jsonplaceholder.typicode.com/users', );

    // // fetching data from api
    // useEffect(() => {
    //     async function getUsers() {
    //         // calling the users api
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const data = await response.json();
    //         console.log(data);

    //         // set the users state
    //         setUsers(data);
    //     }
    //     getUsers();
    // }, [])

    return (
        <>
            {users && users.length && users.map((user) => {
                return <p key={user.id}>{user.name}</p>
            })}
            {users && users.length <= 0 && <h1>No users found!</h1>}
        </>
    )
}

export default ComponentA