import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TodoForm() {
  const [form, setForm] = useState({
    title: "",
    completed: false,
  });
 const navigate = useNavigate()

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post(`http://localhost:3001/create`, form)
      .then(() => {
        alert("Item criado");
        navigate("/")

      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
    
      <input 
      name="title" 
      value={form.title} 
      onChange={handleChange} />
     <button type="submit">Add todo</button> 
  
    </form>
  );
}
