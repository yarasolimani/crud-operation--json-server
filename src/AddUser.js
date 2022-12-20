import { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddUser = ({ newUser, setNewUser, handleSubmit }) => {
	const inputRef = useRef()

	return (
		<form className="addForm" onSubmit={handleSubmit}>
			<label htmlFor="addItem">Add User</label>
			<input
				autoFocus
				ref={inputRef}
				id="addItem"
				type="text"
				placeholder="Add User"
				required
				value={newUser}
				onChange={(e) => setNewUser(e.target.value)}
			/>
			<button
				type="submit"
				aria-label="Add Item"
				onClick={() => inputRef.current.focus()}
			>
				<FaPlus />
			</button>
		</form>
	)
}

export default AddUser
