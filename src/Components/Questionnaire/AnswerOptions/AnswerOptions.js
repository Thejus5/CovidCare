import classes from './AnswerOptions.module.css'

const Options = (props) => {
	const createRadioButtons = () => {
		let options = props.options
		let element = []

		for (let elem of options) {
			element.push(
				<div key={elem.answer} className={classes.options}>
					<input type="radio" id={elem.answer} name="gender" value={elem.answer} onChange={props.changed} />
					<label for={elem.answer}>{elem.answer}</label>
				</div>
			)
		}

		return element
	}

	return <div className={classes.optionDiv}>{createRadioButtons()}</div>
}

export default Options
