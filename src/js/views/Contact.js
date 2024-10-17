import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";
import { CardContact } from "../component/CardContact";
import { Context } from "../store/appContext";

export const Contact = () => {
	const {store} = useContext(Context)
	return (
		<div className="contact-list">
			<div>
				<Link to="/AddContact">
					<div className="d-grid gap-2 d-md-flex justify-content-md-end">
						<button className="btn btn-success me-md-2" type="button">Add new Contact</button>
					</div>
				</Link>
				<div>
				{Array.isArray(store.contactsList) && store.contactsList.map((contact, index) => (
					<CardContact key={index} contact={contact} />
				))}
			</div>
			</div>

		</div>
	)
}