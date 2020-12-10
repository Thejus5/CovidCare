import classes from './Toolbar.module.css'
import Logo from '../../Assets/Images/Logo_min.png'

const toolbar = () => (
	<div className={classes.toolbar}>
		<img src={Logo} alt="Covid Care logo" />
		<p>Covid Care</p>
	</div>
)

export default toolbar
