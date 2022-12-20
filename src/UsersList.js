import LineUsers from './LineUsers'
const UsersList = ({ users, handleCheck, handleDelete }) => {
	return (
		<ul>
			{users.map((user) => (
				<LineUsers
					key={user.id}
					user={user}
					handleCheck={handleCheck}
					handleDelete={handleDelete}
				/>
			))}
		</ul>
	)
}

export default UsersList
