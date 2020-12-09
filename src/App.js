import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Login from './Components/Login/Login'
import Questionnaire from './Components/Questionnaire/Questionnaire'
import { useSelector, useDispatch } from 'react-redux'
import { logIn, updateActiveQuestion } from './Actions/Actions'

let COMPANY_CODES = null
let ALL_QUESTIONS = null

function App() {
	// Life cycle hooks (fOR api CALL)
	useEffect(() => {
		axios.get('https://api.jsonbin.io/b/5fd04d17e0402744b370255d').then((res) => {
			console.log(res.data.questions)
			COMPANY_CODES = res.data.companyCodes
			ALL_QUESTIONS = res.data.questions

			let num = answeredQuestions.pop()
			console.log(answeredQuestions.pop())
			console.log(num)
			console.log(ALL_QUESTIONS.find((question) => question.questionNumber === num))

			// let num = [...answeredQuestions].splice(-1, 1)
			// console.log(answeredQuestions.splice(-1,1))
			// console.log(num)
			// console.log(ALL_QUESTIONS.find((question) => question.questionNumber === num[0]))
		})
	}, [])

	// States
	const [invalidCompanyCode, setInvalidCompanyCode] = useState(false)

	// redux items
	const dispatch = useDispatch()
	const loggedInStatus = useSelector((state) => state.loggedIn)
	const answeredQuestions = useSelector((state) => state.answeredQuestions)
	const activeQuestion = useSelector((state) => state.activeQuestion)

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

	const questionSelector = ()=>{
		let nextQnNumber = answeredQuestions.pop() || 0
		console.log((nextQnNumber))
		if(nextQnNumber === 3) console.log('both are same')
		const nextQuestion = ALL_QUESTIONS.find((question) => {
			console.log(question)
			if(question.questionNumber === nextQnNumber){
				console.log('Selected qn:'+question)
				return question
			}
		})
		console.log(nextQuestion)
		return (nextQuestion.questionNumber)
	}

	const test = () => {
		return 'hi'
	}

	return (
		<div className="App">
			{loggedInStatus ? (
				<Questionnaire question={questionSelector()} />
			) : (
				<Login login={validateCompanyCode} isInvalidCode={invalidCompanyCode} change={clearErrorMsg} />
			)}
		</div>
	)
}

export default App
