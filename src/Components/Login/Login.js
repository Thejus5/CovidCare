import classes from './Login.module.css'
import Aux from '../../HOC/Auxilary'
import Button from '../Button/Button'
import Logo from '../../Assets/Images/Logo.png'

const login = (props) => {
	return (
		<div className={classes.loginBox}>
			<img src={Logo} alt="Covid Care Logo" />
			<div className={classes.loginCard}>
				<input
					id="companyCodeInput"
					className={props.isInvalidCode ? [classes.codeInput, classes.errorInput].join(' ') : classes.codeInput}
					type="text"
					onChange={props.change}
				/>
				{props.isInvalidCode ? <p className={classes.errorMessage}>Invalid Company code</p> : null}
				<Button clicked={props.login} type={'full'}>Login</Button>
			</div>
		</div>
	)
}

export default login
//props.isValidCode ? classes.codeInput : classes.codeInput
