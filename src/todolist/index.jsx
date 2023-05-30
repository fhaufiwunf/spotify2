// import React, {useEffect, useState} from 'react'
// import './style.css';
// import ShowItem from './showitem';

// const TodoList = () => {
//   const [title, setTitle] = useState('')
//   const [todoList, setTodoList] = useState([]);

// const isvalid = false;
// useEffect(() =>{
  
  
// }, []);

// const showTodoList = () => {
//   const arr = [];
//   for (let i = todoList.length -1; i >= 0; i--) {
//     arr.push(todoList[i]);
//   }
//   return arr;
// }
//   const handlesumbit = (e) => {
//     e.preventDefault();
//     const newTodo = {
//       todoName:e.target['inputtodoName'].value,
//       des: e.target['tododescription'].value,
//       status: false,
//     }
//     todoList.push(newTodo);
//     setTodoList([...todoList]);
//   }
//   const handleChange = (e) => {
//     setTitle(e.target.value);
//   }
//   const handleClear = (e) => {
//     setTitle(e.target.value);
//   }
//   const handleClearTodoList =() => {
//     setTodoList([]);
//   }
//   return (
//     <div className="todolist">
//       <h1>Todo Application</h1>
//       <form onSubmit={handlesumbit} className="box3nav">
//         <input type="text" placeholder='Todo Title' name='inputtodoName' value={title} onChange={handleChange}></input> 
//         <input type="text" placeholder='description' name='tododescription'></input> 
//         <button className='bluecolor'>creat todo</button>
//       </form>
//       <div className="box2click">
//         <button className="redcolor" onClick={handleClearTodoList}>clear todos</button>
//         <button className="greycolor">mark as completed</button>
//       </div>
//       <table className="contentoftable">
//         <thead>

//         <tr>

//           <td>name</td>
//           <td>description</td>
//           <td>status</td>
//           <td>action</td>
          
//         </tr>
//         </thead>
//         <tbody>
//           {

//               todoList.map((item) => {
//                 return <ShowItem 
//                  todoName ={item.todoName} 
//                  des ={item.des} 
//                  status={item.status}
//                 />
//               })

//           }
          
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default TodoList;

// // rafce