import {createSlice, nanoid} from '@reduxjs/toolkit';

const carsSlice = createSlice( {
    name: 'cars',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action)
        {
            state.searchTerm = action.payload;
        },

        addCar(state, action)
        {
            /*
                ASSUMPTION:
                action.payload is an object with the following shape:
                {
                    name: 'car name',
                    cost: 1234
                }
            */
            state.data.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            })
        },
        removeCar(state, action)
        {
            /*
                ASSUMPTION:
                action.payload === id of the car to be removed
            */

                const updated = state.data.filter( (car) => {
                    return car.id !== action.payload;
                })

                state.data = updated;
        }
    }
})

export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;