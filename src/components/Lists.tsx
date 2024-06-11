import { ListItem } from "./ListItem";


export function List() {
    let data = [
        {
            id: "1",
            title: "hello",
            description: "This is a description",
            dateCreated: "12/08/2000",
            deadLine: "12/08/2000",
            priority: "🔴",
            doing: "true"
        },
        {
            id: "2",
            title: "hello",
            description: "This is a description",
            dateCreated: "12/08/2000",
            deadLine: "12/08/2000",
            priority: "🔴",
            doing: "true"
        },
    ];

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
