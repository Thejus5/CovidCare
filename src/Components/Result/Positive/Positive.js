import Congo from '../../../Assets/Images/Congo.png'
import classes from './Positive.module.css'

const positive = ()=>{
  return (
		<div className={classes.container}>
			<img className={classes.congoImg} src={Congo} alt="Sad dog" />
			<h2>Congratulations</h2>
			<p>You are clear to go forward</p>
		</div>
	)
}

export default positive