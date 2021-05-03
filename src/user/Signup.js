import React, { useState } from 'react';
import Base from '../core/Base';
import { Link } from 'react-router-dom';
import { signup } from '../auth/helper'

const Signup = () => {

    // to save the data 
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    });

    // destructure things
    const { name, email, password, error, success } = values

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value })
    };
    // on submit button
    const onSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false });
        signup({ name, email, password })
            .then(data => {
                if (data && data.error) {
                    setValues({ ...values, error: data.error, success: false });
                } else {
                    setValues({
                        ...values,
                        name: "",
                        email: "",
                        password: "",
                        error: "",
                        success: true
                    });
                }
            })
            .catch(console.log("Error in signup"));
    };


    // signup form
    const signUpForm = () => {

        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left" >
                    <form >
                        <div className="form-group">
                            <label className="text-light">
                                Name
                            </label>
                            {/* onchange takes the new input and put in place of name  */}
                            <input className="form-control" type="text" onChange={handleChange("name")}
                                value={name}
                            ></input>

                        </div>
                        <div className="form-group">
                            <label className="text-light">
                                Email
                            </label>
                            <input className="form-control" type="email"
                                onChange={handleChange("email")} value={email}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label className="text-light">
                                Password
                            </label>
                            <input className="form-control" type="password" onChange={handleChange("password")} value={password} ></input>
                        </div>

                        <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>

                    </form>
                </div>
            </div>
        )

    };

    const successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left" >
        <div className= "alert alert-success" style={{display:   success ? "" :"none"}}>
            New User created successfully. Please {" "} <Link to="/signin" >Login here</Link>
            </div>
            </div>
        </div> 
        )
    }

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left" >
        <div className= "alert alert-danger" style={{display:   error ? "" :"none"}}>{error}
            {/* New User created successfully. Please {" "} <Link to="/signin" >Login here</Link> */}
            </div>
            </div>
        </div>
        )
    }



    return (
        <Base title="Signup" description="">
            {signUpForm()}
            {successMessage()}
            {errorMessage()}
            <p className=" text-white text-center">{JSON.stringify(values)} </p>
        </Base>
    )
}

export default Signup