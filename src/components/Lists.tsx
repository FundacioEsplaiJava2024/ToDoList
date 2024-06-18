import React, { useEffect, useState } from "react";
import { ListItem } from "./ListItem";

interface Data {
  id: string;
  title: string;
  description: string;
  dateCreated: string;
  deadLine: string;
  priority: string;
  doing: boolean;
}

interface ListProps {
  filter: string; // Recibe el filtro como prop
}

const List: React.FC<ListProps> = ({ filter }) => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("tasks") || "[]");
    if (savedData.length > 0) {
      setData(savedData);
    }
  }, []);

  const handleDelete = (id: string): void => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    localStorage.setItem("tasks", JSON.stringify(updatedData));
  };

  const handleToggleDoing = (id: string): void => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, doing: !item.doing };
      }
      return item;
    });
    setData(updatedData);
    localStorage.setItem("tasks", JSON.stringify(updatedData));
  };

  return (
    <div className="list-wrapper">
      {data
        .filter((item) => {
          if (filter === "all") {
            return true;
          } else if (filter === "doing") {
            return item.doing === false;
          } else if (filter === "done") {
            return item.doing === true;
          }
          return true;
        })
        .map((item) => (
          <ListItem
            key={item.id}
            title={item.title}
            description={item.description}
            doing={item.doing}
            onToggleDoing={() => handleToggleDoing(item.id)}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
    </div>
  );
};

export default List;
