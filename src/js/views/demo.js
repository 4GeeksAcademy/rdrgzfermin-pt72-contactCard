import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		 actions.fetchContacts(); // Fetch on component mount 
	}, []);

	return (
		<div className="container">
			<ul className="list-group">
				{store.contacts.map((contact, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between">
							<span>{contact.name}</span>
							<div>
								<button className=" btn btn-warning" onClick={() => actions.updateContact(index, {...contact, name: "Updated Name" })}>Edit</button>
								<button className=" btn btn-danger" onClick={() => actions.deleteContact(index)}>Delete</button>
							</div>
							</li>
						);
						})}
						</ul>
						<br />
						<link to="/add-contact">
							<button className="btn btn-primary">Add Contact</button>
						</link>
						<link to="/">
							<button className="btn btn-secondary">Back Home</button>
						</link>
						</div>
		);
	};