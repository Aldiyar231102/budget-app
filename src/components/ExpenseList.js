import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  const handleChange = (event) => {
	
    const searchTerm = event.target.value.toLowerCase();

    const searchResults = expenses.filter((filteredExpense) => {
      return filteredExpense.name.toLowerCase().localeCompare(searchTerm, 'ru') === 0;
    });

    setFilteredExpenses(searchResults);
  };

  return (
    <>
      <input
        type='text'
        className='form-control mb-2 mr-sm-2'
        placeholder='Введите для поиска...'
        onChange={handleChange}
      />
      <ul className='list-group mt-3 mb-3'>
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;