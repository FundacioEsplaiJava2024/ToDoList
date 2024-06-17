import React, { useState } from 'react';
import Modal from './Modal';


interface AddButtonProps {
    addTask: (task: Task) => void;
}

interface Task {
    id: string;
    title: string;
    description: string;
    dateCreated: string;
    deadLine: string;
    priority: string;
    doing: boolean;
}

const AddButton: React.FC<AddButtonProps> = ({ addTask }) => {
    const [show, setShow] = useState(false);

    const showModal = () => setShow(true);
    const hideModal = () => setShow(false);

    const handleAddTask = (data: Task) => {
        
        const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = [...tasks, data];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        setShow(false);
        //addTask(data);
    };

    return (
        <div>
            <button onClick={showModal}>Add +</button>
            <Modal show={show} hideModal={hideModal} onSubmit={handleAddTask} />
        </div>
    );
};

export default AddButton;