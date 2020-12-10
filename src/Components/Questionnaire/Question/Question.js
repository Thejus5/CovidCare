import classes from './Question.module.css'

const question = (props) => {
	return (
		<div className={classes.questionDiv}>
			<p>{props.question}</p>
		</div>
	)
}

export default question
