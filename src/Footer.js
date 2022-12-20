const Footer = ({ length }) => {
	return (
		<footer>
			<p>
				{length} List {length === 1 ? 'user' : 'users'}
			</p>
		</footer>
	)
}

export default Footer
