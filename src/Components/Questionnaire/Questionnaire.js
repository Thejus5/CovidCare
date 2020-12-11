import Aux from '../../HOC/Auxilary'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { updateActiveQuestion, removeCurrentQuestion } from '../../Actions/Actions'
import Question from './Question/Question'
import Options from './AnswerOptions/AnswerOptions'
import Button from '../Button/Button'
import Toolbar from '../Toolbar/Toolbar'
import Result from '../Result/Result'
import classes from './Questionnaire.module.css'

let COVID_PATIENT_FOR_QUESTION = {}
let ANSWERS_TO_DESCRIPTIVE_QUESTIONS = {}
let USER_ANSWERED_QUESTION = false

const Questionnaire = (props) => {
	let dispatch = useDispatch()
	const [activeQuestion, setActiveQuestion] = useState({})
	const [subQuestionExist, setSubQuestionExist] = useState(false)
	let answeredQuestions = useSelector((state) => state.answeredQuestions)

	useEffect(() => {
		turnOffRadioButtons()
		if (answeredQuestions.length === 0) setActiveQuestion(props.questions[0])
		else setActiveQuestion(filterOutQuestion())
	})

	const filterOutQuestion = () => {
		const nextQnNumber = [...answeredQuestions].splice(-1, 1) || [0]
		return props.questions.find((question) => question.questionNumber === nextQnNumber[0] + 1)
	}

	const updateAnsweredQuestions = () => {
		if (USER_ANSWERED_QUESTION) dispatch(updateActiveQuestion(activeQuestion.questionNumber))
	}

	const removeQuestionFromList = () => {
		dispatch(removeCurrentQuestion())
	}

	const onAnswer = (e) => {
		if (activeQuestion.options) checkAnswerForCovid(e, activeQuestion.options)
		if (activeQuestion.subQuestion) {
			let optionToCheck = activeQuestion.options.find((option) => option.enableSubQn)
			if (e.target.value == optionToCheck.answer) {
				setSubQuestionExist(true)
				return
			}
		}
		USER_ANSWERED_QUESTION = true
		setSubQuestionExist(false)
	}

	const onSubQuestion = (e) => {
		USER_ANSWERED_QUESTION = true
		if (activeQuestion.subQuestion.options) checkAnswerForCovid(e, activeQuestion.subQuestion.options)
	}

	const checkAnswerForCovid = (event, options) => {
		let optionsToConfirmCovid = options.filter((option) => option.points == 1)
		if (optionsToConfirmCovid.length > 0) {
			markCovid(event, optionsToConfirmCovid)
		} else {
			let optionsToDeleteCovid = options.filter((option) => option.points == 0)
			deleteCovid(event, optionsToDeleteCovid)
		}
	}

	const markCovid = (eventToCheck, optionsToConfirmCovid) => {
		optionsToConfirmCovid.forEach((option) => {
			let questionNumber = JSON.stringify(activeQuestion.questionNumber)
			if (option.answer == eventToCheck.target.value) {
				COVID_PATIENT_FOR_QUESTION = { ...COVID_PATIENT_FOR_QUESTION, [questionNumber]: true }
			} else {
				delete COVID_PATIENT_FOR_QUESTION[questionNumber]
			}
		})
	}

	const deleteCovid = (eventToCheck, optionsToDeleteCovid) => {
		optionsToDeleteCovid.forEach((option) => {
			let questionNumber = JSON.stringify(activeQuestion.questionNumber)
			if (option.answer == eventToCheck.target.value) {
				delete COVID_PATIENT_FOR_QUESTION[questionNumber]
			}
		})
	}

	const storeDescriptiveAnswers = (e) => {
		if (e.target.value.length > 0) USER_ANSWERED_QUESTION = true
		let newAnswers = { ...ANSWERS_TO_DESCRIPTIVE_QUESTIONS, [activeQuestion.questionNumber]: e.target.value }
		ANSWERS_TO_DESCRIPTIVE_QUESTIONS = newAnswers
	}

	const turnOffRadioButtons = () => {
		console.log(document.querySelectorAll('input'))
		document.querySelectorAll('input').forEach((input) => (input.checked = false))
	}

	useEffect(() => {
		setSubQuestionExist(false)
		USER_ANSWERED_QUESTION = false
	}, [answeredQuestions])

	return (
		<Aux>
			<Toolbar />
			{answeredQuestions.length >= props.questions.length ? (
				<Result results={COVID_PATIENT_FOR_QUESTION} allAnswers={ANSWERS_TO_DESCRIPTIVE_QUESTIONS} />
			) : (
				<div className={classes.mainContainer}>
					<Question question={activeQuestion.question} number={activeQuestion.questionNumber} />
					{activeQuestion.type === 'radio' ? (
						<Options options={activeQuestion.options} changed={onAnswer} />
					) : (
						<div className={classes.textareaContainer}>
							<textarea autoFocus onChange={storeDescriptiveAnswers} />
						</div>
					)}

					{subQuestionExist && activeQuestion.type === 'radio' ? (
						<div>
							<Question question={activeQuestion.subQuestion.question} number={null} />
							{activeQuestion.subQuestion.type === 'radio' ? (
								<Options options={activeQuestion.options} changed={onSubQuestion} />
							) : activeQuestion.subQuestion.type === 'date' ? (
								<div className={classes.dateContainer}>
									<input type="date" onChange={storeDescriptiveAnswers} />
								</div>
							) : (
								<div className={classes.textareaContainer}>
									<textarea autoFocus onChange={storeDescriptiveAnswers} />
								</div>
							)}
						</div>
					) : null}

					<div className={classes.buttonsContainer}>
						{activeQuestion.questionNumber !== 1 ? (
							<div className={classes.btnBox}>
								<Button clicked={removeQuestionFromList} type={'Not full'}>
									Previous
								</Button>
							</div>
						) : null}
						<div className={classes.btnBox}>
							<Button clicked={updateAnsweredQuestions} type={'full'}>
								Next
							</Button>
						</div>
					</div>
				</div>
			)}
		</Aux>
	)
}

export default Questionnaire
