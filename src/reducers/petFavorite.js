const petFavorite = (state = 5, action) => {
	switch (action.type) {
		case "PET_FA_INCREASED":
			return state + action.payload;
		case "PET_FA_DECREASED":
			return state - 1;
		default:
			return state;
	}
};

export default petFavorite;
