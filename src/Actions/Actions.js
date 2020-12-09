export const logIn = () => ({
  type: 'LOG_IN',
})

export const logOut = () => ({
	type: 'LOG_OUT',
})

export const updateActiveQuestion = (question) => ({
  type: 'UPDATE_QUESTION',
  payload: question
})