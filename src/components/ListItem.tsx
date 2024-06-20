import { useState } from "react";
import { Pencil, Trash } from "./Icons";
import  ModalEdit  from './ModalEdit';

interface ItemProps {
  title: string;
  description?: string;
  onDelete: () => void;
}

export function ListItem({ title, description, onDelete }: ItemProps) {
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


  return (
    <>
      {/* <ModalEdit show={show} hideModal={hideModal} onSubmit={handleEditTask} /> */}
      <div className="list-item"
        onClick={showModal}
      >
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        <div>
          <button style={styles.editButton}>
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
