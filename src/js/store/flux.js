const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            baseUrl: "https://playground.4geeks.com",
            contactsList: [],



        },
        actions: {

            getContactList: () => {
                const { baseUrl } = getStore()
                fetch(`${baseUrl}/contact/agendas/rdrgzfermin`)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Network response was not ok");
                        }
                        return response.json();
                    })
                    .then((responseJson) => setStore({ contactsList: responseJson.contacts })) /* cambiarsetTodos */
                    .catch((error) => console.log("Error fetching:", error));
            },
            addContact: (newContact) => {
                const options = {
                    method: 'POST',
                    body: JSON.stringify(newContact),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const { baseUrl, contactsList } = getStore()
                fetch(`${baseUrl}/contact/agendas/rdrgzfermin/contacts`, options)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Failed to save");
                        }
                        return response.json();
                    })
                    .then((responseJson) => setStore({ contactsList: [...contactsList, responseJson] }))
                    .catch((error) => console.log(" Error saving", error))
            },
            updateContact: (contact, id) => {
                const options = {
                    method: 'PUT',
                    body: JSON.stringify(contact),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const { baseUrl, contactsList } = getStore()
                fetch(`${baseUrl}/contact/agendas/rdrgzfermin/contacts/${id}`, options)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Failed to update");
                        }
                        return response.json();
                    })
                    .then((responseJson) => {
                        getActions().getContactList()
                    })
                    .catch((error) => console.log(" Error updating contact", error))
            },
            deleteContact: (id) => {
                const options = {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
                const { baseUrl, contactsList } = getStore()
                fetch(`${baseUrl}/contact/agendas/rdrgzfermin/contacts/${id}`, options)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error("Failed to delete")
                        } else {
                            setStore({ contactsList: contactsList.filter((contact) => contact.id !== id) });
                        }

                    })
                    .catch((error) => console.log("Error deleting todo:", error))
            },
            handleSubmit: (e) => {
                e.preventDefault();
                const newContact = {
                    name: e.target.name.value,
                    phone: e.target.phone.value,
                    email: e.target.email.value,
                    address: e.target.address.value
                }
                const actions = getActions()
                actions.addContact(newContact);
            },
            handleUpdate: (e, id) => {
                e.preventDefault();
                const updateContact = {
                    name: e.target.name.value,
                    phone: e.target.phone.value,
                    email: e.target.email.value,
                    address: e.target.address.value
                }
                const actions = getActions()
                actions.updateContact(updateContact, id);
            },

        }
    };
};

export default getState;