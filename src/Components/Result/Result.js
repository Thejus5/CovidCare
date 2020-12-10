import Pass from './Positive/Positive'
import Fail from './Negative/Negative'

const result = (props)=>{
  let numberOfQuestionsInList = Object.keys(props.results).length
  return (
    <div>
      {numberOfQuestionsInList <=0 ? <Pass/>: <Fail/>}
    </div>
  )
}

export default result