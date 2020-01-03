import React from 'react';
import logo from './logo.svg';
import './App.css';
// import CountComponent from './components/day1/CountComponent';
// import CountHookComponent from './components/day1/CountHookComponent';
import QuizComponent from './components/quiz/QuizComponent';
function App() {

  // const showName = (value) => {
  //   alert("Hello : "+ value)
  // }
  const arr =[  //const 불변 => let으로 변경 
    {title:"Quiz1...", answer:"1"},
    {title:"Quiz2...", answer:"2"},
    {title:"Quiz3...", answer:"3"},
    {title:"Quiz4...", answer:"4"},
    {title:"Quiz5...", answer:"5"},
]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <CountComponent></CountComponent> */}
        {/* <CountHookComponent></CountHookComponent> */}
        <QuizComponent arr={arr}></QuizComponent>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
