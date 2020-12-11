import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Login from './Components/Login/Login'
import Questionnaire from './Components/Questionnaire/Questionnaire'
import { useSelector, useDispatch } from 'react-redux'
import { logIn } from './Actions/Actions'

let COMPANY_CODES = null
let ALL_QUESTIONS = []

function App() {
	// Life cycle hooks (fOR api CALL)
	useEffect(() => {
		axios.get('https://api.jsonbin.io/b/5fd04d17e0402744b370255d').then((res) => {
			COMPANY_CODES = res.data.companyCodes
			ALL_QUESTIONS = res.data.questions
		})
	}, [])

	// States
	const [invalidCompanyCode, setInvalidCompanyCode] = useState(false)

	// redux items
	const dispatch = useDispatch()
	const loggedInStatus = useSelector((state) => state.loggedIn)

	// Methods
	const validateCompanyCode = () => {
		if (COMPANY_CODES) {
			const enteredCompanyCode = document.querySelector('#companyCodeInput').value
			if (COMPANY_CODES.includes(enteredCompanyCode)) {
				logInUser(enteredCompanyCode)
			} else {
				showErrorMsg()
			}
		}
	}
	const logInUser = (code) => {
		dispatch(logIn())
	}

	const showErrorMsg = () => {
		setInvalidCompanyCode(true)
	}

	const clearErrorMsg = () => {
		setInvalidCompanyCode(false)
	}

	const test = () => {
		return 'hi'
	}

	return (
		<div className="App">
			{loggedInStatus ? (
				<Questionnaire questions={ALL_QUESTIONS} />
			) : (
				<Login login={validateCompanyCode} isInvalidCode={invalidCompanyCode} change={clearErrorMsg} />
			)}
		</div>
	)
}

export default App
