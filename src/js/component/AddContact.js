import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import { Context } from "../store/appContext";


export const AddContact = () => {
	const {store,actions} = useContext(Context)

	return (
		<div className="container mt-4">
			<h2>Add a new contact</h2>
			<form onSubmit={actions.handleSubmit}>
				<div className="mb-3">
					<label for="exampleInputName" className="form-label">Full Name</label>
					<input type="text" className="form-control" id="name" name="name" aria-placeholder="Full Name" />


				</div>
				<div className="mb-3">
					<label for="exampleInputEmail" className="form-label">Email</label>
					<input type="email" className="form-control" id="email" name="email" aria-placeholder="Enter email" />
				</div>
				<div className="mb-3">
					<label for="exampleInputEmail" className="form-label">Phone</label>
					<input type="text" className="form-control" id="phone" name="phone" aria-placeholder="Enter phone" />
				</div>
				<div className="mb-3">
					<label for="exampleInputEmail" className="form-label">Address</label>
					<input type="text" className="form-control" id="address" name="address" aria-placeholder="Enter address" />
					<Link to="/">
						<small className="form-text link-primary">back to contacts</small>
					</Link>
				</div>
				<div className="d-grid gap-2">
					<button type="submit" className="btn btn-primary" onClick={() => actions.addContact(newContact)}>Save</button>
				</div>

			</form>


		</div>
	);
};