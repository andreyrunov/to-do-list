import React, { useState } from 'react'
import axios from 'axios'

import addSvg from '../../assets/icons/add.svg'

function AddTaskForm({ list, onAddTask }) {
	const [visibleForm, setVisibleForm] = useState(false)
	const [inputValue, setInputValue] = useState('')
	const [isLoading, setIsLoading] = useState('')

	const toggleFormVisible = () => {
		setVisibleForm(!visibleForm)
		setInputValue('')
	}

	const addTask = () => {
		const obj = {
			listId: list.id,
			text: inputValue,
			completed: false,
		}
		setIsLoading(true)
		axios
			.post(`${process.env.DOMAIN}/tasks`, obj)
			.then(({ data }) => {
				onAddTask(list.id, data)
				toggleFormVisible()
			})
			.catch(() => {
				alert('Ошибка при добавлении задачи')
			})
			.finally(() => {
				setIsLoading(false)
			})
	}

	return (
		<div className='tasks__form'>
			{!visibleForm ? (
				<div onClick={toggleFormVisible} className='tasks__form-new'>
					<img src={addSvg} alt='add' />
					<span>Новая задача</span>
				</div>
			) : (
				<div className='tasks__form-block'>
					<input
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						className='field'
						type='text'
						placeholder='Текст задачи'
					/>
					<button disabled={isLoading} onClick={addTask} className='button'>
						{isLoading ? 'Добавление...' : 'Добавить задачу'}
					</button>
					<button onClick={toggleFormVisible} className='button button--grey'>
						Отмена
					</button>
				</div>
			)}
		</div>
	)
}

export default AddTaskForm
