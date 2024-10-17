import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Contact } from "./views/Contact";
import { AddContact } from "./views/AddContact";
import injectContext, { Context } from "./store/appContext";
import { EditContact } from "./views/editContact";



//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const state = useContext(Context)

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Routes>
					<Route path="/" element={<Contact />} />
					<Route path="/AddContact" element={<AddContact />} />
					<Route path="/EditContact/:id" element={<EditContact />} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};


export default injectContext(Layout);