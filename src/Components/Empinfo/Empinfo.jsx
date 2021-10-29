import React from 'react'
import './Empinfo.css'

function Empinfo() {

    return (
        <div>
            <h2 className="text-center">Enter Employee Details</h2>
            <form method="post">
                <div className="container d-flex flex-column justify-content-center">

                    <input type="text"
                        placeholder="Enter Employee ID"
                        className="form-control mt-3" />
                    <input type="text"
                        placeholder="Enter Employee Name"
                        className="form-control mt-3" />
                    <input type="text"
                        placeholder="Enter Employee Designation"
                        className="form-control mt-3" />
                    <input type="text"
                        placeholder="Enter Employee Department"
                        className="form-control mt-3" />
                    <input type="text"
                        placeholder="Employee Working Time"
                        className="form-control mt-3" />
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary mt-4">Submit</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default Empinfo
