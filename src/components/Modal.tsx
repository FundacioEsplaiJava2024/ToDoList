import React, { useState } from 'react';

interface Task {
    id: string;
    title: string;
    description: string;
    dateCreated: string;
    deadLine: string;
    priority: string;
    doing: boolean;
}

interface AddTaskModalProps {
    show: boolean;
    hideModal: () => void;
    onSubmit: (data: Task) => void;
}

const Modal: React.FC<AddTaskModalProps> = ({ show, hideModal, onSubmit }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDeadline, setTaskDeadline] = useState('');
    const [taskPriority, setTaskPriority] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (taskName.trim() === '') {
            alert('Please enter a task name');
            return;
        }
  
        const newTask: Task = {
            id: String(Date.now()),
            title: taskName,
            description: taskDescription,
            dateCreated: new Date().toLocaleDateString(),
            deadLine: taskDeadline || "",
            priority: taskPriority,
            doing: true
        };

        onSubmit(newTask);
        setTaskName('');
        setTaskDescription('');
        setTaskDeadline('');
        setTaskPriority('');
        hideModal();
    };

    if (!show) {
        return null;
    }

    return (
        <div className="modal display-block">
            <section className="modal-main">
                <h2>Add a new task</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Task Name:
                        <input
                            type="text"
                            name="taskName"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            name="taskDescription"
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                        />
                    </label>
                    <label>
                        Deadline:
                        <input
                            type="date"
                            name="taskDeadline"
                            value={taskDeadline}
                            onChange={(e) => setTaskDeadline(e.target.value)}
                            pattern="\d{2}/\d{2}/\d{4}"
                        />
                    </label>
                    <label>
                        Priority:
                        <select
                            value={taskPriority}
                            onChange={(e) => setTaskPriority(e.target.value)}
                            required
                        >
                            <option value="🔴">🔴 Low</option>
                            <option value="🟡">🟡 Medium</option>
                            <option value="🔵">🔵 High</option>
                        </select>
                    </label>
                    <button type="submit">Add Task</button>
                </form>
                <button onClick={hideModal}>Close</button>
            </section>
        </div>
    );
};

export default Modal;