import React from 'react'
import './List.scss'
import classNames from 'classnames'
import Badge from '../Badge'
import removeSvg from '../../assets/icons/remove.svg'

function List({ items, isRemovable, onClick, onRemove }) {
	const removeList = (item) => {
		if (window.confirm('Вы действительно хотите удалить список?')) {
			onRemove(item)
		}
	}
	return (
		<ul onClick={onClick} className='list'>
			{console.log(items, '<------- тут')}
			{items.map((item, index) => (
				<li
					key={index}
					className={classNames(item.className, { active: item.active })}
				>
					<i>{item.icon ? item.icon : <Badge color={item.color.name} />}</i>
					<span>{item.name}</span>
					{isRemovable && (
						<img
							onClick={() => {
								removeList(item)
							}}
							className='list__remove-icon'
							src={removeSvg}
							alt='remove'
						/>
					)}
				</li>
			))}
		</ul>
	)
}

export default List
