import { useState } from "react";

interface Task {
    title: string;
    description: string;
    deadLine: string;
    priority: string;
}

interface EditTaskModalProps {
    show: boolean;
    hideModal: () => void;
    onSubmit: (data: Task) => void;
    data?: (data: Task) => void;
}

const ModalEdit: React.FC<EditTaskModalProps> = ({ show, hideModal, onSubmit, data }) => {

    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDeadline, setTaskDeadline] = useState("");
    const [taskPriority, setTaskPriority] = useState("");

    const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (taskName.trim() === "") {
            alert("Please enter a task name");
            return;
        }

        const editTask: Task = {
            title: taskName,
            description: taskDescription,
            deadLine: taskDeadline,
            priority: taskPriority,
        };

        onSubmit(editTask);
        setTaskName("");
        setTaskDescription("");
        setTaskDeadline("");
        setTaskPriority("");
        hideModal();
    };

    if (!show) {
        return null;
    }

    console.log(data)

    return (
        <div className="modal display-block">
            <section className="modal-main">
                <h2>Add a new task</h2>
                <form>
                    <label>
                        Task Name:
                        <input
                            type="text"
                            name="taskName"
                            placeholder="Tittle"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            name="taskDescription"
                            placeholder="Description"
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
export default ModalEdit;

