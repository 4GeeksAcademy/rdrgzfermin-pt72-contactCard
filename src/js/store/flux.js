const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: { 
			contacts: [],
		},
		actions: {
			loadContactList: () => {
				fetch("https://playground.4geeks.com/contact/agendas/rdrgzfermin")
					then((resp) => resp.json())
					then(data => setStore({ "contacts": data }));
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
					const response = await fetch("https://playground.4geeks.com/contact/agendas/rdrgzfermin", {
						method: "POST",
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
						window.location.reload();
						return updatedContacts;
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