const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: { 
			contacts: [],
		},
		actions: {
			loadContactList: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/TS06")
					.then((resp) => resp.json())
					.then(data => setStore({ "contacts": data }));
			},
			addContact: async (name, email, address, phone) => {
				const newContact = {
					full_name: name,
					email: email,
					agenda_slug: "TS06",
					address: address,
					phone: phone,
				};
				try {
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
						method: "POST", // Use POST to add a new contact
						headers: {
							"Content-type": "application/json",
						},
						body: JSON.stringify(newContact),
					});
					if (response.status === 201) {
						const data = await response.json();
						const updatedContacts = [...getStore().contacts, data];
						setStore({
							contacts: updatedContacts,
						});
						// Refresh the page
						window.location.reload();
						return updatedContacts; // Return the updated array of contacts
					} else {
						console.error("Error adding contact: Unexpected status code", response.status);
					}
				} catch (error) {
					console.error("Error adding contact:", error);
				}
			},
		},
	};
};

export default getState;