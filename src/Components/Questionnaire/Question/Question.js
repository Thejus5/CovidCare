import classes from './Question.module.css'

const question = (props) => {
	return (
		<div className={classes.questionDiv}>
			<p><span>{props.number}. </span>{props.question}</p>
		</div>
	)
}

export default question
