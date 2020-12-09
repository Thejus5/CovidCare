import loggedInReducer from './loggedinReducer'
import answeredQuestionReducer from './answeredQuestionsReducer'
import activeQuestionReducer from './activeQuestionReducer'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
	loggedIn: loggedInReducer,
	answeredQuestions: answeredQuestionReducer,
	activeQuestion: activeQuestionReducer
})

export default allReducers
