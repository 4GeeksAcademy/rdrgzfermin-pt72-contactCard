const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
        },
        actions: {
            fetchContacts: async () => {
                try {
                    const slug = "ContactLists"; // Fixed slug for the agenda
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    const data = await response.json();
                    setStore({ contacts: data.contacts }); // Assuming 'contacts' is the key in the returned JSON
                } catch (error) {
                    console.error("Error fetching contacts:", error);
                }
            },

            addContact: (contact) => {
                const store = getStore();
                setStore({ contacts: [...store.contacts, contact] });

                // Assuming you want to add the contact to the server as well
                const slug = "ContactLists"; // Fixed slug for the agenda
                fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(contact)
                })
                .then(response => response.json())
                .then(data => {
                    console.log("Contact added:", data);
                    // You can also update the state with the response if needed
                })
                .catch(error => console.error("Error adding contact:", error));
            },

            updateContact: (index, updatedContact) => {
                const store = getStore();
                const contacts = store.contacts.map((contact, i) =>
                    i === index ? updatedContact : contact
                );
                setStore({ contacts: contacts });

                // If you want to update the contact on the server:
                const slug = "ContactLists"; // Fixed slug for the agenda
                const contactId = updatedContact.id; // Assuming each contact has an ID
                fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${contactId}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(updatedContact)
                })
                .then(response => response.json())
                .then(data => {
                    console.log("Contact updated:", data);
                })
                .catch(error => console.error("Error updating contact:", error));
            },

            deleteContact: (index) => {
                const store = getStore();
                const contacts = store.contacts.filter((_, i) => i !== index);
                setStore({ contacts: contacts });

                // If you want to delete the contact on the server:
                const slug = "ContactLists"; // Fixed slug for the agenda
                const contactId = store.contacts[index].id; // Assuming each contact has an ID
                fetch(`https://playground.4geeks.com/contact/agendas/${slug}/contacts/${contactId}`, {
                    method: "DELETE"
                })
                .then(response => {
                    if (response.ok) {
                        console.log("Contact deleted");
                    } else {
                        throw new Error("Failed to delete contact");
                    }
                })
                .catch(error => console.error("Error deleting contact:", error));
            },
        },
    };
};

export default getState;
