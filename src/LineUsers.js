import { FaTrashAlt } from 'react-icons/fa'

const LineUsers = ({ user, handleCheck, handleDelete }) => {
	return (
		<li className="item">
			<input
				type="checkbox"
				onChange={() => handleCheck(user.id)}
				checked={user.checked}
			/>
			<label
				style={user.checked ? { textDecoration: 'line-through' } : null}
				onDoubleClick={() => handleCheck(user.id)}
			>
				{user.user}
			</label>
			<FaTrashAlt
				onClick={() => handleDelete(user.id)}
				role="button"
				tabIndex="0"
				aria-label={`Delete ${user.user}`}
			/>
		</li>
	)
}

export default LineUsers
