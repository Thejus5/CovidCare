export const logIn = () => ({
	type: 'LOG_IN',
})

export const logOut = () => ({
	type: 'LOG_OUT',
})

export const updateActiveQuestion = (question) => ({
	type: 'NEXT_QUESTION',
	payload: question,
})

export const removeCurrentQuestion = () => ({
	type: 'PREVIOUS_QUESTION',
})
