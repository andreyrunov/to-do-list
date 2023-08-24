import React from 'react'
import axios from 'axios'
import classNames from 'classnames'

import './List.scss'
import Badge from '../Badge'

import removeSvg from '../../assets/icons/remove.svg'

function List({
	items,
	isRemovable,
	onClick,
	onRemove,
	onClickItem,
	activeItem,
}) {
	const removeList = (item) => {
		if (window.confirm('Вы действительно хотите удалить список?')) {
			axios.delete(`${process.env.DOMAIN}/lists/` + item.id).then(() => {
				onRemove(item.id)
			})
		}
	}
	return (
		<ul onClick={onClick} className='list'>
			{items.map((item, index) => (
				<li
					key={index}
					className={classNames(item.className, {
						active: item.active
							? item.active
							: activeItem && activeItem.id === item.id,
					})}
					onClick={onClickItem ? () => onClickItem(item) : null}
				>
					<i>{item.icon ? item.icon : <Badge color={item.color.name} />}</i>
					<span>
						{item.name}
						{item.tasks && ` (${item.tasks.length})`}
					</span>
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
