import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span>Бюджет: ₸{props.budget}</span>
			<button type='button' className='btn btn-primary' onClick={props.handleEditClick}>
				Редактировать
			</button>
		</>
	);
};

export default ViewBudget;