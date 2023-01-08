import { createSlice } from "@reduxjs/toolkit"

const initialValues = {

}
export const User = createSlice({
    name: 'user',
    initialState: initialValues,
    reducers: {
        storeUser: (state, action) => {
            return action.payload;
        }
    }
});

export const { storeUser } = User.actions;
export default User.reducer;