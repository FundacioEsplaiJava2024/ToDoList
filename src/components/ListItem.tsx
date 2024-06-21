import { useState } from "react";
import { Pencil, Trash } from "./Icons";
import ModalEdit from './ModalEdit';
import { Task } from "../Task";

interface ItemProps {
  task: Task;
  onToggleDoing: () => void;
  onDelete: () => void;
  onEdit: (updatedTask: Task) => void;
}

export function ListItem({ task, onToggleDoing, onDelete, onEdit }: ItemProps) {
  const styles = {
    deleteButton: {
      color: "#9d0208",
    },
    editButton: {
      color: "#f5bd1f",
    },
  };

  const [show, setShow] = useState(false);

  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  const handleEditTask = (updatedTask: Task) => {
    onEdit({ ...updatedTask, id: task.id, doing: task.doing });
    hideModal();
  };
  const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    onToggleDoing();
  };

  return (
    <>
      <ModalEdit show={show} hideModal={hideModal} onSubmit={handleEditTask} data={task} />
      <div className="list-item" onClick={showModal}>
        <div className="check-estruct">
          <input
            className="check"
            type="checkbox"
            checked={task.doing}
            onChange={handleCheckboxClick}
            onClick={(e) => e.stopPropagation()}
          />
          <h1 onClick={showModal}>{task.title}</h1>
        </div >
        {task.description && <p onClick={showModal} className="text">{task.description}</p>}
        <div>
          <button style={styles.editButton} onClick={showModal}>
            <Pencil />
          </button>
          <button style={styles.deleteButton} onClick={onDelete}>
            <Trash />
          </button>
        </div>
      </div>
    </>
  );
}
