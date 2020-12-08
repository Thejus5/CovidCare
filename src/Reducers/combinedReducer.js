import loggedInReducer from './loggedinReducer'
import answeredQuestionReducer from './answeredQuestionsReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
	loggedIn: loggedInReducer,
	answeredQuestions: answeredQuestionReducer,
})

export default allReducers
