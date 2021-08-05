import "./App.css";
import { petFADecrement, petFAIncrement } from "./actions";
import { useSelector, useDispatch } from "react-redux";

function NewApp() {
	const petFavorite = useSelector((state) => state.petFavorite);
	const dispatch = useDispatch();
	return (
		<div className="App">
			<h1>New Component</h1>
			<button onClick={() => dispatch(petFAIncrement(5))}>Add pet</button>
			<button onClick={() => dispatch(petFADecrement(2))}>Remove pet</button>
			<h2>Number of favorite pets so far {petFavorite}</h2>
		</div>
	);
}

export default NewApp;
