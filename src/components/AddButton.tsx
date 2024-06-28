import { useState, useEffect } from 'react';
import Modal from './Modal';
import { Task } from '../Task';

const AddButton: React.FC = () => {
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]') as Task[];
    setTasks(storedTasks);
  }, []);

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  const handleAddTask = (newTask: Task) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    hideModal(); 
  };

  return (
    <div>
      <button onClick={showModal} className='addbutton'>Add +</button>
      <Modal show={show} hideModal={hideModal} onSubmit={handleAddTask} />
    </div>
  );
};

export default AddButton;
