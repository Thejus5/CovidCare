import classes from './Button.module.css'

const button = (props)=>{
  let classNames = null
  if(props.type=='full') {
    classNames = classes.btn
  }
  else{
    classNames = classes.btnGhost
  }
  return(
    <button className={classNames} onClick={props.clicked}>{props.children}</button>
  )
}
export default button