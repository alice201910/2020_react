import React, { useState } from 'react';
import CountBoard from './CountBoard';
import CountButton from './CountButton';

//함수형
const CountHookComponent = () => {

    const [count , setCount] = useState(0);
    
    const changeCount = (amount) =>{
        setCount( count + amount) //this 없음, 함수라서
    } 

    return(
        <>
            <CountBoard num={count}></CountBoard>
            <CountButton label="+" wrapper={changeCount} amount = {1}></CountButton>  
            <CountButton label="-" wrapper={changeCount} amount = {-1}></CountButton>  
        </>
    )
}

export default CountHookComponent