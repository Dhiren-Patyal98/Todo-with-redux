import React, { useEffect, useState } from "react";
import Tasks from "./Tasks";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch } from "react-redux";
import { addTodo } from "../store/task";
import { toggleComplete } from '../store/task';
import { deleteTodo } from '../store/task';

export default function TodoList() {

  const [refresh ,setRefresh] = useState(0)
const dispatch = useDispatch();





 

  function handleSubmit(e) {
    let task = e.target.task.value;
    let description = e.target.description.value
    
    e.preventDefault();
    dispatch(addTodo({
      title:task,
      description:description,


    }));
    e.target.task.value = '';
    e.target.description.value = '';
    setRefresh(refresh+1)


    
   
  }

//  useEffect(()=>
// {
//   localStorage.setItem("todos",JSON.stringify(todos))
// },[todos])

  useEffect(() => {
    
    console.log("task list is updated");
    AOS.init();
  },[refresh] );


  function handleTaskStatus(id,completed)
  {
   dispatch(toggleComplete({id : id , completed:!completed}));
  }

  function handleDeletekStatus(id)
  {
    dispatch(deleteTodo({id:id}))
    AOS.refreshHard()
    setRefresh(refresh-1)
  }

  return (
    <>
    <div>
    <div data-aos="fade-up"
        
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center">
       
      <div className="container my-5 m-0 p-0"
      style={{transform: "translateX(-12%)"}}>
        <div
          className="mx-auto rounded border p-4"
          style={{  maxWidth: "800px", width: "100%", backgroundColor: "#08618" }}
        >
          <h2 className="text-white text-center mb-5" style={{ fontFamily:"Garamond, serif", fontSize : "55px"}}> My ToDo List</h2>
          <form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              name="task"
              placeholder="Task Name"
              style={{ width: '300px' }}
              required
            />
             <input
              className="form-control me-2"
              name="description"
              placeholder="Description"
              style={{ width: '700px' }}
              required
            />
            <button
              className="btn btn-outline-light"
              
              type="submit"
            >
              ADD
            </button>
          </form>



         <Tasks  handleDeletekStatus={handleDeletekStatus} handleTaskStatus={handleTaskStatus}/>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}
