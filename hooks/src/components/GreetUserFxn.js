import { useEffect, useState } from "react";

function GreetUserFxn() {
    const [firstname, setFirstname] = useState("Pranjali");
    const [lastname, setLastname] = useState("Punse");
    const [favIcecream, setFavIceCream] = useState("vanilla");

    // equivalent to CDM + CDU
    useEffect(() => {
        console.log("useEffect")
        document.title = firstname + " " + lastname;
    }, 
    // []  // empty dependency array (means its now equivalent to just CDM)
    [lastname, firstname]  // setup fxn executing when lastname state updating
    )

    const handleLastName = (e) => {
        setLastname(e.target.value);
    }
    
    const handleFavIcecream = (e) => {
        setFavIceCream(e.target.value);
    }

    return (
        <>
            <div style={{marginTop: "25vh"}}>
                <label htmlFor="firstName">First Name:- </label>
                <input type="text" value={firstname} id="firstName" name="firstname" onChange={e => setFirstname(e.target.value)} />
            </div>
            <br />
            <br />
            <br />
            <div>
                <label htmlFor="lastName">Last Name:- </label>
                <input type="text" value={lastname} id="lastName" name="lastname" onChange={handleLastName}/>
            </div>
            <br />
            <br />
            <div>
                <label htmlFor="icecream">Favourite Icecream is:- </label>
                <input type="text" value={favIcecream} id="icecream" name="icecream" onChange={handleFavIcecream}/>
            </div>
            <h1>{`My name is ${firstname} ${lastname}, and my favourite Ice-Cream flavour is:${favIcecream}`}</h1>
        </>
    )
}

export default GreetUserFxn;