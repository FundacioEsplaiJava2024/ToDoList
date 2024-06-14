import { Pencil, Trash } from "./Icons";

interface ItemProps {
  title: string;
  description?: string;
}

export function ListItem({ title, description }: ItemProps) {
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
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <div>
        <button style={styles.editButton}>
          <Pencil />
        </button>
        <button style={styles.deleteButton}>
          <Trash />
        </button>
      </div>
    </div>
  );
}
