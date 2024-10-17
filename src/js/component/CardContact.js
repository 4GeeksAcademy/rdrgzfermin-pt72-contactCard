import React, { Component, useContext } from "react";
import "../../styles/index.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardContact = ({ contact }) => {
	const { store, actions } = useContext(Context)

	return (
		<div className="cardContact">
			<div className="card p-3 mb-3">
				<div className="d-flex align-items-center">

					<img src="https://picsum.photos/id/64/200" className="img-fluid rounded-circle" alt="..." />

					<div className="ms-3 w-100">
						<h5>{contact?.name}</h5>
						<div className="text-muted">
							<i className="fas fa-map-marker-alt me-2"></i>
							{contact?.address}
						</div>
						<div className="text-muted">
							<i className="fas fa-phone me-2"></i>
							{contact?.phone}
						</div>
						<div className="text-muted">
							<i className="fas fa-envelope me-2"></i>
							{contact?.email}
						</div>
					</div>

					<div className="ms-auto">
						<Link to={"/EditContact/" + contact?.id}>
							<i className="fas fa-pencil-alt me-3"> </i>
						</Link>

						<i className="fas fa-trash" onClick={() => actions.deleteContact(contact?.id)}></i>
					</div>
				</div>
			</div>
		</div>
	);
};