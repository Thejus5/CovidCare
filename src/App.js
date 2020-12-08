import './App.css'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Login from './Components/Login/Login'
import { useSelector, useDispatch } from 'react-redux'
import { logIn } from './Actions/Actions'

let COMPANY_CODES = null

function App() {
  // Life cycle hooks (fOR api CALL)
  useEffect(()=>{
    axios.get('https://api.jsonbin.io/b/5fcf6da465c249127ba4eb19/1').then((res) => {
      console.log(res.data)
      COMPANY_CODES = res.data.companyCodes
		})
  },[])

	// States
	const [invalidCompanyCode, setInvalidCompanyCode] = useState(false)

	// redux items
	const dispatch = useDispatch()
	const loggedInStatus = useSelector((state) => state.loggedIn)

	// Methods
	const validateCompanyCode = () => {
		if(COMPANY_CODES){
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

	return (
		<div className="App">
			{loggedInStatus ? null : (
				<Login login={validateCompanyCode} isInvalidCode={invalidCompanyCode} change={clearErrorMsg} />
			)}
		</div>
	)
}

export default App
