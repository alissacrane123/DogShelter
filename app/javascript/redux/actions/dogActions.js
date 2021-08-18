export const RECEIVE_DOG = 'RECEIVE_DOG'
export const RECEIVE_DOGS = 'RECEIVE_DOGS'

const receiveDog = (dog) => {
	return {
		type: RECEIVE_DOG,
		payload: dog,
	};
};
const receiveDogs = (dogs) => {
	return {
		type: RECEIVE_DOGS,
		payload: dogs,
	};
};

export const createDog = (dog) => {
	return async (dispatch) => {
		try {
			let res = await $.ajax({
				method: "POST",
				url: "/api/dogs",
				data: { dog },
			});
			dispatch(receiveDog(res));

			console.log("create dog res", res);
		} catch (err) {
			console.log("create dog error", err);
		}
	};
};


export const fetchDogs = () => {
	return async (dispatch) => {
		try {
			let res = await $.ajax({
				method: "GET",
				url: "/api/dogs"
			});
			dispatch(receiveDogs(res));

			console.log("create dog res", res);
		} catch (err) {
			console.log("create dog error", err);
		}
	};
};

