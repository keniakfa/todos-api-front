import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditList() {
  const [form, setForm] = useState({
    title: "",
    completed: false,
  });
  const navigate = useNavigate()

  const { id } = useParams();


  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .put(`http://localhost:3001/todos/${id}`, form)
      .then(() => {
        alert("Item atualizado");
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input name="title" value={form.title} onChange={handleChange}></input>

      <button type="submit">Add todo</button>
    </form>
  );
}

export default EditList;
