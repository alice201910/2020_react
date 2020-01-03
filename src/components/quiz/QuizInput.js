import React, {useState} from 'react'

const QuizInput =({fn}) => {
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
        console.log(e.target.value)
    }

    const handleClick = () => {
        console.log("click")
        fn(text)
        setText('')
    }

    return (
        <div>
            <input type ='text' onChange={handleChange} value={text}></input>
            <button onClick={handleClick}>button</button>
        </div>
    )
}
export default QuizInput