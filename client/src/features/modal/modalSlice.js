
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalType: null,
    modalLocation: null,
    nestedModalType: null
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showModal: (state, action) => {
            state.modalType = action.payload
            state.modalLocation = window.location.pathname
        },
        showNestedModal: (state, action) => {
            state.nestedModalType = action.payload
            state.modalLocation = window.location.pathname
        },
        clearModalState: (state, action) => {
            state.modalType = null
            state.modalLocation = null
            state.nestedModalType = null
        }
    }
})

export const {
    showModal,
    showNestedModal,
    clearModalState
} = modalSlice.actions
export default modalSlice.reducer