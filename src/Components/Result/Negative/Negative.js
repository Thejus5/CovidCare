import Sorry from '../../../Assets/Images/Soory.png'
import classes from './Negative.module.css'

const negative = () => {
	return (
		<div className={classes.container}>
			<img className={classes.sorryImg} src={Sorry} alt="Sad Dog" />
			<h2>Sorry</h2>
			<p>You are not clear to go forward</p>
			<p>Please have a medical checkup and come back later</p>
		</div>
	)
}

export default negative
