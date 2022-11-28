import React from 'react'

import addSvg from '../../assets/icons/add.svg'

function AddTaskForm() {
	return (
		<div className='tasks__form'>
			<div className='tasks__form-new'>
				<img src={addSvg} alt='add' />
				<span>Новая задача</span>
			</div>
		</div>
	)
}

export default AddTaskForm
