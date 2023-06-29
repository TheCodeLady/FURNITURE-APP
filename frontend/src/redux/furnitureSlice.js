import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	furniture: [],
};

export const furnitureSlice = createSlice({
	name: "furniture",
	initialState,
	reducers: {
		fetchFurniture: (state, action) => {
			state.furniture = action.payload;
		},
		addFurniture: (state, action) => {
			state.furniture.push(action.payload);
		},
	},
});

// Action creators are generated for each case reducer function
export const { fetchFurniture, addFurniture } = furnitureSlice.actions;

export default furnitureSlice.reducer;
