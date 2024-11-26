import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function ErrorPage() {
    const navigateTo = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            // navigateTo("/") // navigate to home
            navigateTo(-1) // navigate to last url
        }, 3000)
    })
    return (
        <>
            <div>Oops! something went wrong!</div>
            <Link to="/"> Let's go back home</Link>
        </>
    )
}

export default ErrorPage