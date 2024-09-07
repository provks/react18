function App() {

    function sum(a, b) {
        return a+b;
        const c = a+b;
        console.log(c);
        
    }

    const name = "Amit"
    const rollNo = 21;
    const bool = true;
    const lastname = null;
    const middlename = undefined;
    
    // Array
    const arr = [1, 2, 3, 4, 5];
    const evenArr = arr.filter((num) => {
        if (num % 2 == 0) {
            return num;
        }
    });

    // Student object
    const student = {
        name: "Varun",
        rollNo: 21,
        marks: 44   
    }

    const students = ["Piyush", "Chetak", "Anubhav", "Saloni", "Satyam"];

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
                <h1>Hello, My name is {name}</h1>
                {/* Iterating over array using map */}
                {/* <h3>Array: {arr.map((num) => {
                    console.log(num);
                    return <p>{num}</p>
                })}</h3> */}

                {/* Using filter to print only even elements */}
                <h3>{evenArr.map((num, i) => <p key={i}>{num}</p>)}</h3>

                {/* Objects in JSX */}
                {/* <h3>{student.marks}</h3>
                <h3>{student["name"]}</h3>
                <h3>{student["rollNo"]}</h3>
                <h3>{student.rollNo}</h3> */}
                {/* <p>My roll no. is: {rollNo}</p>
                <p>Boolean: {bool}</p>
                <p>Lastname: {lastname}</p>
                <p>Lastname: {String(lastname)}</p>
                <p>Middlename: {middlename}</p>
                <p>Middlename: {String(middlename)}</p> */}
                {/* <p>Boolean: {bool.toString()}</p> */}
                {/* <p>Boolean: {String(bool)}</p> */}
                
                {/* // Listing in React */}
                <ol>
                    {students.map((student, index) => {
                        return <li key={index}>{student}</li>
                    })}
                </ol>


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

// const jsx = <h1>Learning JSX today!</h1>



ReactDOM.createRoot(document.getElementById('root')).render(<App/>);