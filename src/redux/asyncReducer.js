import axios from 'axios'
const initialState = {
    houses: [],
    loading: false,
    err: false,
}

const GET_HOUSES = 'GET_HOUSES'
const DELETE_HOUSE = 'DELETE_HOUSE'
const ADD_HOUSE = 'ADD_HOUSE'

export const getHouses = () => {
    return {
        type: GET_HOUSES,
        payload: axios.get('/api/houses'),
    }
}

export const deleteHouse = (id) => {
    return {
        type: 'DELETE_HOUSE',
        payload: axios.delete(`/api/houses/${id}`),
    }
}

export const addHouse = (house) => {
    return {
        type: 'ADD_HOUSE',
        payload: axios.post(`/api/houses`, house),
    }
}

export default function asyncReducer(state = initialState, action) {
    switch (action.type) {
        case `${GET_HOUSES}_PENDING`:
            return {
                ...state,
                loading: true,
            }

        case `${GET_HOUSES}_FULFILLED`:
            return {
                ...state,
                houses: action.payload.data,
                loading: false,
            }

        case `${GET_HOUSES}_REJECTED`:
            return {
                ...state,
                err: true,
                loading: false,
            }

        case `${DELETE_HOUSE}_PENDING`:
            return {
                ...state,
                loading: true,
            }

        case `${DELETE_HOUSE}_FULFILLED`:
            return {
                ...state,
                houses: action.payload.data,
                loading: false,
            }

        case `${DELETE_HOUSE}_REJECTED`:
            return {
                ...state,
                err: true,
                loading: false,
            }

        case `${ADD_HOUSE}_PENDING`:
            return {
                ...state,
                loading: true,
            }

        case `${ADD_HOUSE}_FULFILLED`:
            return {
                ...state,
                houses: action.payload.data,
                loading: false,
            }

        case `${ADD_HOUSE}_REJECTED`:
            return {
                ...state,
                err: true,
                loading: false,
            }
        default:
            return state
    }
}
