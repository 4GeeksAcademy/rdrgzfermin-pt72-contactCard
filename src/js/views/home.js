import React, { useContext,useEffect,useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [contacts, setContacts] = useState(store.contacts);

  useEffect(() => {
      setContacts(store.contacts);
  }, [store.contacts]);
  const handleAddContact = async () => {
    const newContacts = await actions.addContact("John Doe", "johndoe@example.com", "123 Main St", "123-456-7890");
    setContacts(newContacts);
};

  return (
    <div className="text-center mt-5">
      <Link to="/addcontact">
        <button className="btn btn-success">Add New Contact</button>
      </Link>
      {store.contacts.map((contactList, i) => {
        return (
          <div key={i} className="card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="circle-avatar mr-3">
                  <img src={contactList.avatar} alt="Avatar" />
                </div>
                <div>
                  <h1>Full Name: {contactList.full_name}</h1>
                  <h2>Phone: {contactList.phone}</h2>
                  <h2>Address: {contactList.address}</h2>
                  <h2>Email: {contactList.email}</h2>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                {/* <Link to={"/addcontact"}>
                  <button className="btn btn-primary">Edit</button>
                </Link> */}
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};