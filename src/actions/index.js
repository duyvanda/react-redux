export const petIncrement = (number) => {
	return {
		type: "PET_INCREASED",
		payload: number,
	};
};

export const petDecrement = () => {
	return {
		type: "PET_DECREASED",
	};
};

export const petFAIncrement = (number) => {
	return {
		type: "PET_FA_INCREASED",
		payload: number,
	};
};

export const petFADecrement = () => {
	return {
		type: "PET_FA_DECREASED",
	};
};
