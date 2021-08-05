import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NewApp from "./NewApp";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";

// 1. Store
//global state
// 2. Action
//define what to do
// 3. Reducer
//- describe how an action change from one state into another;
//- reducer will check which action is called and store will be modified based on the action
// 4. Dispatch
// - perform the action to reducer

//2. Action
// const petIncrement = () => {
// 	return {
// 		type: "PET_INCREASED",
// 	};
// };

// const petDecrement = () => {
// 	return {
// 		type: "PET_DECREASED",
// 	};
// };

//3. Reducer
// const petCounter = (state = 0, action) => {
// 	switch (action.type) {
// 		case "PET_INCREASED":
// 			return state + 1;
// 		case "PET_DECREASED":
// 			return state - 1;
// 		default:
// 			return state;
// 	}
// };

// let store = createStore(petCounter);
// store.subscribe(() => console.log(store.getState()));

//4. Dispatch
// store.dispatch(petIncrement());
// store.dispatch(petIncrement());
// store.dispatch(petDecrement());

let store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<NewApp />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
