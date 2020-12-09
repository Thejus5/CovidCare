import Aux from '../../HOC/Auxilary'

const questionnaire = (props)=>{
  return (
		<Aux>
			<div>Toolbar</div>
			<div>Question</div>
			<div>options</div>
			<div>SubQuestions</div>
			<div>Buttons</div>
			<div>{props.question}</div>
		</Aux>
	)
}

export default questionnaire