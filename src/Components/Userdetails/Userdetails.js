import React from 'react'
import Topbar from '../Navbar/Navbar'
import './Userdetails.css'

function Userdetails() {
    return (
        <div className="userdetails-body">
            <Topbar />
            <h2 className="text-center">Visitor Details Page</h2>
            <form method="post">
                <div className="container d-flex flex-column justify-content-center">
                    <input type="text"
                        placeholder="Enter Visitor Name"
                        className="form-control mt-3" />
                    <input type="text"
                        placeholder="Enter Visitor Address"
                        className="form-control mt-3" />
                    <input type="text"
                        placeholder="Employee to meet"
                        className="form-control mt-3" />
                    <input type="text"
                        placeholder="Employee Department"
                        className="form-control mt-3" />
                    <input type="text"
                        placeholder="Appointment Time"
                        className="form-control mt-3" />
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary mt-4">Submit</button>
                    </div>

                </div>
            </form>  
        </div>
    )
}

export default Userdetails
