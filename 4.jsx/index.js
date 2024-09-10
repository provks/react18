console.log("From index.js");
const rootDiv = document.getElementById('root');

const jsx = <h1>Hello JSX!</h1>
const jsx2 = <h1 className="blue">Hello JSX!</h1>

const rootElement = ReactDOM.createRoot(rootDiv);
rootElement.render(<App/>);

function FavCarTable() {
    const favCars = [
        {
            id: 11,
            name: "Satyam",
            brand: "Honda",
            model: "Amaze",
            color: "Grey"
        },
        {
            id: 12,
            name: "Chetak",
            brand: "Ford",
            model: "Mustang GT",
            color: "Red"
        },
        {
            id: 13,
            name: "Anubhav",
            brand: "MG",
            model: "Hector",
            color: "black"
        },
        {
            id: 15,
            name: "Prashant",
            brand:"Bentley", 
            model: "Musanne ewb",
            color: "black"
        },
        {
            id: 22,
            name: "Piyush",
            brand: "Lamborghini",
            model: "Urus",
            color: "black"
        },
        {
            id: 24,
            name: "Varun",
            brand: "Tata",
            model: "Safari",
            color: "black"
        }
    ];

    return <table border="1">
        <thead>
            <tr>
                <th>User Name</th>
                <th>Brand Name</th>
                <th>Model</th>
                <th>Color</th>
            </tr>

        </thead>
        <tbody>
            {favCars.map((favCar, index) => {
                return <tr key={favCar.id}>
                    <td>{favCar.name}</td>
                    <td>{favCar.brand}</td>
                    <td>{favCar.model}</td>
                    <td>{favCar.color}</td>
                </tr>
            })}
            
        </tbody>
    </table>
}


// component App
function App () {
    
    // ******** Conditional Rendering: IF ELSE
    // const isUserLoggedIn = false;
    // const username = "";
    // if (isUserLoggedIn && username) {
    //     return <h1>Hi {username}, welcome to Coding Ninjas</h1>
    // } if (isUserLoggedIn) {
    //     return <h1>Hi user, welcome to Coding Ninjas</h1>
    // } else {
    //     return <h1>Please login to continue</h1>
    // }

    // ******** Conditional Rendering: IF ELSE
    // const isStudent = false;
    // if (isStudent) {
    //     return <StudentTable></StudentTable>
    // }
    // return <FavCarTable/>

    // ******** Conditional Rendering: TERNARY OPERATOR
    // const isStudent = true;
    // return ((isStudent) ? <StudentTable></StudentTable> : <FavCarTable/>)


    // ******** Conditional Rendering: AND OPERATOR (&&)
    // const isStudent = false;
    // const isUserLoggedIn = true;
    // return (isUserLoggedIn && isStudent && <StudentTable></StudentTable>)

    // ******** Conditional Rendering: OR OPERATOR (||)
    const isStudent = false;
    const isUserLoggedIn = true;
    // return ((isUserLoggedIn || isStudent) || <StudentTable></StudentTable>) // no output
    return ((isUserLoggedIn || <FavCarTable></FavCarTable>) || <StudentTable></StudentTable>) // no output



    


    // return jsx2;
    // return <>
    // <h1>User's Fav Cars</h1>
    // <FavCarTable/>
    // </>;
}


function StudentTable() {
    const studentTable = [
        {
            name: "Piyush",
            rollNo: 21,
            marks: 44   
        },
        {
            name: "Chetak",
            rollNo: 3,
            marks: 40   
        },
        {
            name: "Anubhav",
            rollNo: 1,
            marks: 30   
        },
        {
            name: "Saloni",
            rollNo: 11,
            marks: 20  
        },
        {
            name: "Satyam",
            rollNo: 12,
            marks: 10   
        }
    ]
    return  <>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Roll No</th>
                            <th>Marks</th>
                        </tr>
                    </thead>
                    <tbody>
                    {studentTable.map((student, i) => {
                        return <tr key={i}>
                            <td>{student.name}</td>
                            <td>{student.rollNo}</td>    
                            <td>{student.marks}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </>
}