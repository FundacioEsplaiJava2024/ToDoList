import React, { useState } from 'react';

interface AddButtonProps {
    addTask: (task: Task) => void; // Use Task interface for type safety
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
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDeadline, setTaskDeadline] = useState('');
    const [taskPriority, setTaskPriority] = useState('🔴');

    const showModal = () => setShow(true);
    const hideModal = () => setShow(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (taskName.trim() === '' || taskDescription.trim() === '') {
            alert('Please enter a task name and description.');
            return;
        }
        if (!taskDeadline || !isValidDate(taskDeadline)) {
            alert('Por favor introduce una fecha válida para Deadline (DD/MM/AAAA).');
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

        addTask(newTask);
        setTaskName('');
        setTaskDescription('');
        setTaskDeadline('');
        setTaskPriority('🔴');
        setShow(false);
    };

    const isValidDate = (dateString: string): boolean => {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        return regex.test(dateString);
    };

    return (
        <div>
            <button onClick={showModal}>Add +</button>
            {show && (
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
                                    required
                                />
                            </label>
                            <label>
                                Deadline:
                                <input
                                    type="text"
                                    name="taskDeadline"
                                    value={taskDeadline}
                                    onChange={(e) => setTaskDeadline(e.target.value)}
                                    placeholder='DD/MM/YYYY'
                                    pattern="\d{2}/\d{2}/\d{4}"
                                    required
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
            )}
        </div>
    );
};

export default AddButton;
