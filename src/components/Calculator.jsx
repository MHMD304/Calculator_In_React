import React from "react";

export default function Calculator() {
  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3",".","0"];
  const operations = ["+", "-", "x", "÷"];
  const [current, setCurrent] = React.useState("");
  const [prev, setPrev] = React.useState("");
  const [operation, setOperation] = React.useState("");
  
  const handleClick = (e)=>{
    setCurrent(prev=>prev+e.target.textContent);
  }
  const handleOperationClick=(op)=>{
    if(current==="") return null;
    setPrev(current);
    setCurrent("");
    setOperation(op);
  }
  const handleEqual = ()=>{
    if(operation===""||current===""||prev==="") return null;
    const num1 = parseFloat(current);
    const num2 = parseFloat(prev);
    let res = 0;
    switch(operation){
        case "+":
            res = num1 + num2;
            break;
        case "-":
            res = num2 - num1;
            break;
        case "÷":
            res=num1 !== 0 ? num2 / num1 : "Error";
            break;
        case "x":
            res = num1*num2;
            break;
        default:
            break;        
    }
    setCurrent(res.toString());
    setOperation("");
  }
  const handleClear = ()=>{
    setCurrent("");
    setOperation("");
    setPrev("");
  }
  
  const handleDelete = () => {
    setCurrent((prev) => prev.slice(0, -1));
  };
  React.useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      setCurrent((prev) => prev.slice(0, -1));
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, []);
  return (
    <div className="calculator">
      <div className="result">
        {
            operation!=="" ? (<span className="prev-operation">{prev} {operation}</span>):null
        }
        <p>{current}</p>
      </div>
      <div className="container">
        
          <div className="test">
            <button className="clear-btn" onClick={handleClear}>C</button>
            <button onClick={handleDelete}>⌫</button> 
            <button onClick={handleEqual}>=</button>
          </div>
        <div className="numbers">
          {numbers.map((num, index) => (
            <button onClick={handleClick} key={index}>{num}</button>
          ))}
          
          
        </div>
        <div className="operations">
          {operations.map((op, index) => (
            <button onClick={() => handleOperationClick(op)} key={index}>{op}</button>
          ))}
        </div>
      </div>
    </div>
  );
}