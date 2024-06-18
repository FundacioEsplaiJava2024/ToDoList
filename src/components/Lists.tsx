import { ListItem } from "./ListItem";
import { useEffect, useState } from "react";

interface Data {
  id: string;
  title: string;
  description: string;
  dateCreated: string;
  deadLine: string;
  priority: string;
  doing: string;
}

export function List() {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const datoGuardado = JSON.parse(localStorage.getItem("tasks") || "[]");
    if (datoGuardado.length > 0) {
      setData(datoGuardado);
    }
  }, []);

  function handleDelete(id: string): void {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    localStorage.setItem("tasks", JSON.stringify(updatedData));
  }
  return (
    <div className="list-wrapper">
      {data.map((item) => (
        <ListItem
          key={item.id}
          title={item.title}
          description={item.description}
          onDelete={() => handleDelete(item.id)}
        />
      ))}
    </div>
  );
}
