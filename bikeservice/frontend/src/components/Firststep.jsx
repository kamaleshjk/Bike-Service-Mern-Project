import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const FirstStep = () => {
    const [fullname, setFullName] = useState();
    const [emailid, setEmailid] = useState();
    const [model, setModel] = useState();
    const [service, setService] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3001/firststep', { fullname, emailid, model, service })
            .then(result => {
                console.log(result);
                if (result.data === "Already registered") {
                    alert("You are already registered");
                    navigate('/Home');
                }
                else {
                    alert("Registered successfully! ")
                    navigate('/Home');
                }

            })
            .catch(err => console.log(err));
    }
    return (
        <div style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" }} className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
            <div className="bg-white p-3 rounded" style={{ width: '40%' }}>
                <h2 className='mb-3 text-primary'>Register For Service</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-start">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            <strong >Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter FullName"
                            className="form-control"
                            id="exampleInputname"
                            onChange={(event) => setFullName(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            <strong >Email</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            className="form-control"
                            id="exampleInputemail"
                            onChange={(event) => setEmailid(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            <strong >Bike Model</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Bike Model"
                            className="form-control"
                            id="exampleInputmodel"
                            onChange={(event) => setModel(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            <strong >Service</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Services"
                            className="form-control"
                            id="exampleInputservice"
                            onChange={(event) => setService(event.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Register</button>
                </form>


            </div>
        </div>
    )
}

export default FirstStep;