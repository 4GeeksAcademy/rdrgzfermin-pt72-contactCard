import React, { useState, useEffect, useContext } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = props => {
	const { store, actions } = useContext(Context);
    const history= useNavigate();
	const[Name,setName]=useState("")
    const[Phone,setPhone]=useState("")
    const[Email,setEmail]=useState("")
    const[Address,setAddress]=useState("")
    const handleSubmit=()=>{
        actions.addContact(Name, Email, Address, Phone);
        history("/");
    }
	return (
		<div className="container">   Add a new contact
			<div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input 
                type="text" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="Name"
                onChange={(e)=>setName(e.target.value)}
                value={Name}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                <input 
                type="text" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="Phone"
                onChange={(e)=>setPhone(e.target.value)}
                value={Phone}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                <input 
                type="text" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                value={Email}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                <input 
                type="text" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="Address"
                onChange={(e)=>setAddress(e.target.value)}
                value={Address}
                />
            </div>
            <button type="button" onClick={handleSubmit} className="btn btn-primary">Save Form</button>
            {/* <button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>Change Color</button> */}
		</div>
	);
};