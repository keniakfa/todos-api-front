import "./App.css";
import TodoForm from "./components/TodoForm";
import { Routes, Route, Link } from "react-router-dom";
import TodoList from "./components/TodoList";
import EditList from "./components/EditList";


function App() {
  return (
    <div className="App">
      <div className="container">
        <div style={{display: "flex", justifyContent:"space-between", color:"white"}}>
        <h1> Todo List</h1>
        <Link className="task" to="/create">Create task</Link>
        </div>
       

        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/create" element={<TodoForm />} />
          <Route path="/edit/:id" element={<EditList />} />
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
