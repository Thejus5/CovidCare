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
		// options.forEach(console.log('Hi'))
		// props.options.map((option) => {
		//   console.log(option)
		// 	return (
		// 		<div>
		// 			<input type="radio" id={option.answer} name="gender" value={option.answer} />
		// 			<label for={option.answer}>Female</label>
		// 		</div>
		// 	)
		// })
	}
	return <div className={classes.optionDiv}>{createRadioButtons()}</div>
}

export default Options
