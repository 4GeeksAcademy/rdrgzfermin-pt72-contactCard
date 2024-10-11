import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { link } from "react-router-dom";

export const AddContact = () => {
    const { actions } = useContext(Context);
    const [contact, setContact] = useState({ name: "", email: "", phone: ""});

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.AddContact(contact);
        setContact({ name: "", email: "", phone: ""});
    };

    return (
        <div className="container">
            <h1>Add Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={contact.name}
                        onChange={(e) => setContact({...contact, name: e.target.value})}
                        />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        className="form-control"
                        value={contact.email}
                        onChange={(e) => setContact({...contact, email: e.target.value})}
                        />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        value={contact.phone}
                        onChange={(e) => setContact({...contact, phone: e.target.value})}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Contact</button>
            </form>
            <link to="/demo">
                <button className="btn btn-secondary mt-3">Back to Contacts</button> 
            </link>
        </div>
    );
};