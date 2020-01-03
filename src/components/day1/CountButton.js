import React from 'react'

const CountButton = ({label, wrapper, amount}) => {

    console.log("amount : "+amount);

    return ( //wrapper => changeCount()임
        <div>
            <button onClick={()=>{wrapper(amount)}}>{label}</button>
        </div>
    )
}

export default CountButton