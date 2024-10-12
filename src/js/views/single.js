import React, {  useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const Single = () => {
	const { store } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {store.contacts[params.theid]?.name}</h1>

			<hr className="my-4" />
			/</div>
		);
	};
