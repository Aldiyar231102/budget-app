import React, { createContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
		case 'SET_BUDGET':
			return {
				...state,
				budget: action.payload,
			};

		default:
			return state;
	}
};

const initialState = {
	budget: 1001147,
	expenses: [
		{ id: uuidv4(), name: 'Покупки', cost: 25028 },
		{ id: uuidv4(), name: 'Отдых', cost: 150172 },
		{ id: uuidv4(), name: 'Транспортировка', cost: 35040 },
		{ id: uuidv4(), name: 'Бензин', cost: 20022 },
		{ id: uuidv4(), name: 'Уход за детьми', cost: 250286 },
	],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				expenses: state.expenses,
				budget: state.budget,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};