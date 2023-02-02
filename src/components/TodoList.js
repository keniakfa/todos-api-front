import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    axios
      .get("http://localhost:3001/todos")
      .then((response) => {
        setTodos([...response.data]);
      })
      .catch(() => {
        console.log("errado");
      });
  };

  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/todos/" + id).then(
      (response) => {
        alert("Item removido");
        getTodos();
      },
      (error) => {
        console.log(error);
        alert("O seu item nao foi removido");
      }
    );
  };
  return (
    <ul>
      {todos.map((item) => (
        <li className="eachTodo">
          <span className="todoText" key={item._id}>
            {item.title}
          </span>
          <input type="checkbox"></input>
  
          <span className="alltodos"> 
          <button onClick={() => navigate(`/edit/${item._id}`)}>Edit</button>

          <button onClick={() => handleDelete(item._id)}>Delete</button>
          </span>
        </li>

      ))}
    </ul>
   

  );
};

export default TodoList;
