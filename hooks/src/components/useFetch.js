import { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null);

    // fetching data from api
    useEffect(() => {
        async function getTodos() {
            // calling the users api
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)

            // set the users state
            setData(data);
        }
        getTodos();
    }, [url])
  
    return [data];
}

export default useFetch;