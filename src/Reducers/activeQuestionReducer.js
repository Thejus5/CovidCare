const activeQuestionReducer = (state = {}, action) => {
	switch (action.type) {
		case 'UPDATE_QUESTION':
			return action.payload
		default:
			return state
	}
}

export default activeQuestionReducer