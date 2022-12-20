import UsersList from './UsersList'
const Content = ({ users, handleCheck, handleDelete }) => {
	return (
		<>
			{users.length ? (
				<UsersList
					users={users}
					handleCheck={handleCheck}
					handleDelete={handleDelete}
				/>
			) : (
				<p style={{ marginTop: '2rem' }}>Your list is empty.</p>
			)}
		</>
	)
}

export default Content
