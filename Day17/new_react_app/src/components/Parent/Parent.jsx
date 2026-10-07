import { useState } from "react";
import Child from "../Child/Child";
import Contact from "../Contact/Contact";


function Parent(props) {

    let [Student, setStudent] = useState(
        [{

            id: 1,
            studentName: "Youssef Mohamed",
            level: '4',
            graduate: false,

        }, {

            id: 2,
            studentName: "Hassan Mohamed",
            level: '4',
            graduate: true,
        }])
    return (
        <>
            <div className="container-fluid bg-success">
                <h1 className="text-center text-light my-3 p-5">Parent</h1>
            </div>
            <Child Studentdetails={Student} />

                
                <Contact></Contact>
        </>

    );
}

export default Parent
