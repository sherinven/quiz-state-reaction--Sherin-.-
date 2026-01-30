import React from "react";
import TodoApp from "./TodoApp";
import './App.css';
function App() {
const center = {
  textAlign: "center",
  fontFamily: "Times New Roman, serif",
  
};
  return (
    <div>
      <h1 className="center">Simple Todo App</h1>
      <TodoApp />
      
    </div>
  );
}

export default App;