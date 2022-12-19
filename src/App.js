import './App.css';
import React, { useState } from 'react';
function App() {
  
  
  const [jobs, setJobs] = useState(()=>{
    const StorageJobs = JSON.parse(localStorage.getItem('jobs'));
    return StorageJobs ??[];
  });
  const [job, setJob] = useState('');
  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job];
      console.log(newJobs);
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs', jsonJobs);
      return newJobs;
    });
    setJob('');
  }
  const DeleteJobs = (index) => {
    const newJobs = jobs.filter((job, idx) => idx !== index);
    console.log(newJobs);
    localStorage.setItem('jobs', JSON.stringify(newJobs));
    setJobs(newJobs);
  };
  return (
    <div className="App">
      <div className='container'>
        <h1 className='Heading multicolortext'>ToDo List</h1>
      
        <div className='form-todo todo-list'>
          <input 
            className=' input-todo'
            type="text"
            laceholder="Nhập công việc" 
            value={job}
            onChange={e => setJob(e.target.value)}
            
          />
          <button className='button-todo' onClick ={handleSubmit}>Thêm</button>
        </div>
        <ul className='todo-list pd-50 dp-flex-col'>
          {jobs.map((job,index)=>(
            <li className='dp-flex-row' key={index}>
              <p>{job}</p>
              <button className='button-todo' onClick={() => DeleteJobs(index)} style={{margin:20}}>Xóa</button>
            </li>
          ))}
        </ul>
       </div>
    </div>
  );
}

export default App;
