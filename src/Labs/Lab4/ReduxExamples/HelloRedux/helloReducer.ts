import { createSlice } from "@reduxjs/toolkit";
const initialState = {
message: "Hello World 123",
};
// this is an example of way to trivial slice
const helloSlice = createSlice({
name: "hello",
initialState,
reducers: {},
});
export default helloSlice.reducer;