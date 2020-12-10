// const state = []

const answeredQuestionsReducer = (state = [], action) => {
	switch (action.type) {
		case 'NEXT_QUESTION':
			return addQuestionToAnswered(state, action.payload)
		case 'PREVIOUS_QUESTION':
			return removeQuestionFromAnswered(state)
		default:
			return state
	}
}

const addQuestionToAnswered = (state, questionNumber) => {
	let answeredQuestions = [...state]
	answeredQuestions.push(questionNumber)
	return answeredQuestions
}

const removeQuestionFromAnswered = (state) => {
	let answeredQuestions = [...state]
	answeredQuestions.pop()
	return answeredQuestions
}

export default answeredQuestionsReducer
