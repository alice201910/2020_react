import React from 'react'

// js 이름이랑 같게 해줌 편함
const Hello = ({name, fn}) => { //fn 내가 만든게 아니고 밖에서 만든 것.

// 

return (
<h1 onClick={()=>{fn(name)}}>Hello World {name}</h1> //가로 열고 닫고 해서 실행 되어 버림(클릭 전에)
)

}

export default Hello

//{} 있으면 return 필요
// 모든 함수형 컴포넌트는 기본적으로 props 전달 받음 props : 함수형 컴포넌트에 전달되는 데이터