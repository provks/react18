import { useState } from "react";

function GreetUserFxn() {
    const [firstname, setFirstname] = useState("Varun");
    const [lastname, setLastname] = useState("Sharma");

    const handleLastName = (e) => {
        setLastname(e.target.value);
    }

    return (
        <>
            <div style={{marginTop: "25vh"}}>
                <label htmlFor="firstName">First Name:- </label>
                <input type="text" id="firstName" name="firstname" onChange={e => setFirstname(e.target.value)} />
            </div>
            <br />
            <br />
            <br />
            <div>
                <label htmlFor="lastName">Last Name:- </label>
                <input type="text" id="lastName" name="lastname" onChange={handleLastName}/>
            </div>
            <h1>{firstname} {lastname}</h1>
        </>
    )
}

export default GreetUserFxn;