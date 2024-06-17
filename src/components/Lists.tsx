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
    // Estado para almacenar el dato recuperado
    const [data, setData] = useState<Data[]>([]);

    // useEffect para recuperar el dato cuando el componente se monta
    useEffect(() => {
        const datoGuardado = JSON.parse(localStorage.getItem('tasks') || '[]');
        if (datoGuardado.length > 0) {
            setData(datoGuardado);
        }
    }, []);

    return (
        <div className="list-wrapper">
            {data.map((item) => (
                <ListItem
                    key={item.id}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    );
}