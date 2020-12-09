// const state = []

const answeredQuestionsReducer = (state = [2], action) => {
	switch (action.type) {
		case 'NEXT_QUESTION':
			return addQuestionToAnswered(state, action.payload)
		case 'PREVIOUS_QUESTION':
			return removeQuestionFromAnswered(state, action.payload)
		default:
			return state
	}
}

const addQuestionToAnswered = (state, questionNumber) => {
	let answeredQuestions = [...state]
	answeredQuestions.push(questionNumber)
	return answeredQuestions
}

const removeQuestionFromAnswered = (state, questionNumber) => {
	let answeredQuestions = [...state]
	answeredQuestions.pop()
	return answeredQuestions
}

export default answeredQuestionsReducer
