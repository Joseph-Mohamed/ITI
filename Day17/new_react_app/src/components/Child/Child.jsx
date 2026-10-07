import About from "../About/About";

function Child({ Studentdetails }) {


    return (
        <>
            <div className="container-fluid bg-dark">
                <h2 className="text-center text-light my-3 p-5">Child</h2>
                <div className="bg-warning text-center text-light my-3 p-5 rounded-3">
                    <h2 className="my-3"><strong>Students Details</strong></h2>

                    <div className="text-start mt-3">
                        <h4>Student id: {Studentdetails[0].id}</h4>
                        <h4>Student Name: {Studentdetails[0].studentName}</h4>
                        <h4>Student price: {Studentdetails[0].level}</h4>
                        <h4>Student Sale: <span><strong>{Studentdetails[0].graduate ? 'Graduated' : 'not Graduated'}</strong></span></h4>
                        <hr />
                        <h4>Student id: {Studentdetails[1].id}</h4>
                        <h4>Student Name: {Studentdetails[1].studentName}</h4>
                        <h4>Student price: {Studentdetails[1].level}</h4>
                        <h4>Student Sale: <span><strong>{Studentdetails[1].graduate ? 'Graduated' : 'not Graduated'}</strong></span></h4>
                    </div>
                </div>
            </div>
            <About></About>
        </>
    );
}

export default Child