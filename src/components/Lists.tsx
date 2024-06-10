
interface ItemProps {
    title: string;
    description?: string;
}

export function ItemList({ title, description }: ItemProps) {
    return (
        <div>
            <h1>{title}</h1>
            {description && <p>{description}</p>}
        </div>
    );
}

export function List() {
    const data = [
        {
            title: "hello",
            description: "This is a description"
        },
    ];

    return (
        <>
            {data.map((item, index) => (
                <ItemList key={index} title={item.title} description={item.description} />
            ))}
        </>
    );
}