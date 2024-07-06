import React from 'react';

import 'aos/dist/aos.css';
import { useSelector } from 'react-redux';


export default function Tasks({  handleDeletekStatus, handleTaskStatus }) {



  const tasks = useSelector((state) => state.tasks);
  if (!tasks || tasks.length === 0) {
    return <p style={{color:'white' , marginTop:'3%' , fontSize:'30px'}}>No tasks available.</p>;
  }

  return (
    <div>
      {tasks.map((todo) => {
        
        return (
          <ul
            key={todo.id}
            className="rounded mt-4 p-2 d-flex"
            style={{
              backgroundColor: todo.completed ? "#3F8845 " : "LightGray",
            }}
            data-aos="fade-in"
            data-aos-duration="500"
          >
            <i
              className={
                "h5 me-2 " +
                (todo.completed ? "bi bi-check-circle" : "bi bi-circle")
              }
              style={{ cursor: "pointer" }}
              onClick={() => handleTaskStatus(todo.id, todo.completed)}
            ></i>
            <li className="me-auto"><b>{todo.title} : </b>{todo.description}</li>
            <div>
              <i
                
                className="bi bi-trash  h5"
                
                style={{ cursor: "pointer" }}
                onClick={() => handleDeletekStatus(todo.id)}
                 data-aos="fade-in"
            data-aos-duration="500"
              ></i>
            </div>
          </ul>
        );
      })}
    </div>
  );
}