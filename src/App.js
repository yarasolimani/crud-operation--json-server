import { useEffect, useState } from 'react'
import AddUser from './AddUser'
import apiRequest from './apiRequest'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
function App() {
	const API_URL = 'http://localhost:3500/users'

	const [users, setUsers] = useState([])
	const [newUser, setNewUser] = useState('')
	const [fetchError, setFetchError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(API_URL)
				if (!response.ok) throw Error('Did not receive expected data')
				const listUsers = await response.json()
				setUsers(listUsers)
				setFetchError(null)
			} catch (err) {
				setFetchError(err.message)
			} finally {
				setIsLoading(false)
			}
		}

		setTimeout(() => fetchItems(), 2000)
	}, [])

	const addUser = async (user) => {
		const id = users.length ? users[users.length - 1].id + 1 : 1
		const myNewUser = { id, checked: false, user }
		const listUsers = [...users, myNewUser]
		setUsers(listUsers)

		const postOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(myNewUser),
		}
		const result = await apiRequest(API_URL, postOptions)
		if (result) setFetchError(result)
	}

	const handleCheck = async (id) => {
		const listUsers = users.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item,
		)
		setUsers(listUsers)

		const myUser = listUsers.filter((item) => item.id === id)
		const updateOptions = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ checked: myUser[0].checked }),
		}
		const reqUrl = `${API_URL}/${id}`
		const result = await apiRequest(reqUrl, updateOptions)
		if (result) setFetchError(result)
	}

	const handleDelete = async (id) => {
		const listUsers = users.filter((item) => item.id !== id)
		setUsers(listUsers)

		const deleteOptions = { method: 'DELETE' }
		const reqUrl = `${API_URL}/${id}`
		const result = await apiRequest(reqUrl, deleteOptions)
		if (result) setFetchError(result)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!newUser) return
		addUser(newUser)
		setNewUser('')
	}

	return (
		<div className="App">
			<Header title="Users List" />
			<AddUser
				newUser={newUser}
				setNewUser={setNewUser}
				handleSubmit={handleSubmit}
			/>

			<main>
				{isLoading && <p>Loading users ... </p>}
				{fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
				{!fetchError && !isLoading && (
					<Content
						users={users.filter((user) => user.user.toLowerCase())}
						handleCheck={handleCheck}
						handleDelete={handleDelete}
					/>
				)}
			</main>
			<Footer length={users.length} />
		</div>
	)
}

export default App
