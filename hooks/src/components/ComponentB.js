import { useEffect, useState } from 'react'

function ComponentB() {
    const [todos, seTodos] = useState([]);

    // fetching data from api
    useEffect(() => {
        async function getTodos() {
            // calling the users api
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            console.log(data);

            // set the users state
            seTodos(data);
        }
        getTodos();
    }, [])

    return (
        <>
            {todos && todos.map((todo) => {
                return <p key={todo.id}>{todo.title}</p>
            })}
            {todos.length <= 0 && <h1>No Todos found!</h1>}
        </>
    )
}

export default ComponentB