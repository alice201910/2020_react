import React, { useState } from 'react'
import QuizBoard from './QuizBoard'
import QuizInput from './QuizInput'

const QuizComponent =({arr}) => { //component 다시 뿌려야 하면 state 사용

    const [idx, setIdx]= useState(0)
    const [end, setEnd] = useState(0)



const checkAnswer =(userInput) => { // 답과 사용자의 답 비교
    console.log("checkAnswer")
    if(arr[idx].answer === userInput){
        if(idx  === arr.length-1){ //마지막 문제까지 정답 맞춤
            setEnd(1)
            return //else 없이 끝
        }
        setIdx(idx + 1); 
    }else{
        setEnd(-1)
    }
}

const comp = () => {
    let result = null;

        if(end === 1){
            result = <h1>ㅊㅊ</h1>
        } else if(end === -1){
            result = <h1>babo</h1>
        } else{
            result = <>
                        <QuizBoard title= {arr[idx].title}></QuizBoard>
                        <QuizInput fn={checkAnswer}></QuizInput>
                    </>
        }
        return result
    }

    return (
        <div>
            {comp()}
        </div>

    )
}
export default QuizComponent