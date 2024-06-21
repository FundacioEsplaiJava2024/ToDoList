import React, { useEffect, useState } from "react";
import { ListItem } from "./ListItem";
import { Task } from '../Task'

interface ListProps {
  filter: string; // Recibe el filtro como prop
}

const List: React.FC<ListProps> = ({ filter }) => {
  const [data, setData] = useState<Task[]>([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("tasks") || "[]");
    if (savedData.length > 0) {
      setData(savedData);
    }
  }, []);

  const handleDelete = (id?: string): void => {
    const updatedData = data.filter((item) => item.id !== id);
    localStorage.setItem("tasks", JSON.stringify(updatedData));
    setData(updatedData);
  };

  const handleToggleDoing = (id?: string): void => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, doing: !item.doing };
      }
      return item;
    });
    setData(updatedData);
    localStorage.setItem("tasks", JSON.stringify(updatedData));
  };

  const handleEdit = (updatedTask: Task): void => {
    const updatedData = data.map((item) => (item.id === updatedTask.id ? updatedTask : item));
    setData(updatedData);
    localStorage.setItem("tasks", JSON.stringify(updatedData));
  };

  return (
    <div className="list-wrapper scrollable-container">
      {data
        .filter((item) => {
          if (filter === "all") {
            return true;
          } else if (filter === "doing") {
            return !item.doing;
          } else if (filter === "done") {
            return item.doing;
          }
          return true;
        })
        .map((item) => (
          <ListItem
            key={item.id}
            task={item}
            onToggleDoing={() => handleToggleDoing(item.id)}
            onDelete={() => handleDelete(item.id)}
            onEdit={handleEdit}
          />
        ))}
    </div>
  );
};

export default List;
