import React, {Component} from 'react'

class Hello2 extends Component{

    constructor(){
        super(); //반드시 해줄 것
        this.state = {count : 1} //instance variable 정의 state로 정해져 있음 (유지하고 싶은 애)

    }
    //함수 정의 (레퍼런스 정의, 갖다 쓰려고)
    handleClick = ()=>{
        console.log("CLICK");
        //불변
        this.setState({count : ++ this.state.count}) // 다음에는 어떻게 해줘가 있어야 함 => 이렇게 만들고 상태 유지해줘 
        //++한 카운트 값을 유지해줘
        //이 state 쓰는 애들 한테 다 영향 끼침
    }

    render(){
        return(
            //직접 갱신하지 않음
            <>
            <h2>{this.state.count}</h2>  
            <button onClick={this.handleClick}>+</button>
            <button>-</button>
            </>
        )
    }
}

export default Hello2