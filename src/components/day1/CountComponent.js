//상태를 유지하는 애(맨 바깥쪽)
import React, {Component} from 'react'
import CountBoard from './CountBoard'
import CountButton from './CountButton'
//Wrapper 컴포넌트가 데이터 포함(고유 데이터 가짐, 애들을 보여주고 안보여주고 하는게 Single Page App)
class CountComponent extends Component{ // 자체적인 상태 유지 
    //로직 처리 - 클래스형 컴포넌트

    constructor(){
        super()
        this.state = {count : 1} 
    }
    
    changeCount = (amount) =>{
        console.log(this)
        //setState로 한 번에 바꿔줌(count 쓰는 애들이 전부 바뀐다)
        this.setState({count : this.state.count + amount}); 
    }

    render(){
        return(
            <> 
                <CountBoard num={this.state.count}></CountBoard>
                <CountButton label="+" wrapper={this.changeCount} amount = {1}></CountButton>  
                <CountButton label="-" wrapper={this.changeCount} amount = {-1}></CountButton>
                <CountButton label="+" wrapper={this.changeCount} amount = {10}></CountButton>  
                <CountButton label="-" wrapper={this.changeCount} amount = {-10}></CountButton>
                <CountButton label="+" wrapper={this.changeCount} amount = {100}></CountButton>  
                <CountButton label="-" wrapper={this.changeCount} amount = {-100}></CountButton>
            </>
        )
    }

}
export default CountComponent;
