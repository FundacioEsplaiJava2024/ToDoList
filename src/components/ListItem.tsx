import { Pencil, Trash } from "./Icons";

interface ItemProps {
  title: string;
  description?: string;
  doing: boolean;
  onToggleDoing: () => void;
  onDelete: () => void;
}

export function ListItem({ title, description, doing, onToggleDoing, onDelete }: ItemProps) {
  const styles = {
    deleteButton: {
      color: "#9d0208",
    },
    editButton: {
      color: "#f5bd1f",
    },
  };

  return (
    <div className="list-item">
      <input
        type="checkbox"
        checked={doing}
        onChange={onToggleDoing}
      />
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
  );
}
