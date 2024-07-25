import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoPage = () => {

	const navigate = useNavigate();
	const onHandleClick = () => {
		console.log('The Back To Home button is clicked');
		navigate('/home');
	}

	return (
		<>
			<div style={{ marginBottom: '15px' }}>Page Not Found 🚫🚫🚫</div>
			<button onClick={() => onHandleClick()}>Back To Home Page🏠</button>
		</>

	)
}

export default NoPage