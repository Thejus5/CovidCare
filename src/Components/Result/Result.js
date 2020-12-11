import Pass from './Positive/Positive'
import Fail from './Negative/Negative'
import {useEffect} from 'react'

const Result = (props)=>{
  useEffect(()=>{
    console.log(props.allAnswers)
  })
  
  let numberOfQuestionsInList = Object.keys(props.results).length
  return (
    <div>
      {numberOfQuestionsInList <=0 ? <Pass/>: <Fail/>}
    </div>
  )
}

export default Result