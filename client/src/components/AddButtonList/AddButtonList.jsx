import React, { useState } from 'react'
import List from '../List/List'
import Badge from '../Badge'
import closeSvg from '../../assets/icons/close.svg'

import './AddButtonList.scss'

function AddButtonList({ colors, onAdd }) {
	const [visiblePopup, setVisiblePopup] = useState(false)
	const [selectedColor, setSelectedColor] = useState(colors[0].id)
	const [inputValue, setInputValue] = useState('')

	const addList = () => {
		if(!inputValue) {
			alert('Введите название списка!');
			return;
		}
		onAdd({
			id: Math.random(),
			name: inputValue,
			color: colors.filter((c) => c.id === selectedColor)[0].name,
		})
	}

	return (
		<div className='add-list'>
			<List
				onClick={() => setVisiblePopup(true)}
				items={[
					{
						className: 'list__add-button',
						icon: (
							<svg
								width='12'
								height='12'
								viewBox='0 0 12 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M6 1V11'
									stroke='#868686'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M1 6H11'
									stroke='#868686'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						),
						name: 'Добавить список',
					},
				]}
			/>
			{visiblePopup && (
				<div className='add-list__popup'>
					<img
						onClick={() => setVisiblePopup(false)}
						src={closeSvg}
						alt='close'
						className='add-list__popup-close-btn'
					/>
					<input
						value={inputValue}
						onChange={e => setInputValue(e.target.value)}
						className='field'
						type='text'
						placeholder='Название списка'
					/>
					<div className='add-list__popup-colors'>
						{colors.map((color) => (
							<Badge
								onClick={() => setSelectedColor(color.id)}
								key={color.id}
								color={color.name}
								className={selectedColor === color.id && 'active'}
							/>
						))}
					</div>
					<button onClick={addList} className='button'>Добавить</button>
				</div>
			)}
		</div>
	)
}

export default AddButtonList
