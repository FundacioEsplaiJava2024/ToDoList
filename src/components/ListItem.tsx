interface ItemProps {
    title: string;
    description?: string;
}

export function ListItem({ title, description }: ItemProps) {
    return (
        <div className="list-item">
            <h1>{title}</h1>
            {description && <p>{description}</p>}
        </div>
    );
}