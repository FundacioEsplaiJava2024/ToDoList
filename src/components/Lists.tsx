
interface ItemProps {
    title: string;
    description?: string;
}

interface ToDoProps {
    title : string,
}

export function ToDoWrapper({ title }: ToDoProps) {


    return (
        <main className="to-do-wrapper">
            <div className="hero-title">
                <h1>
                    { title }
                </h1>
            </div>
            <div className="buttons-wrapper">
                <AddButton />
                <FilterButton />
            </div>
            <List />
        </main>
    )
}

export function AddButton() {

    return (
        <button>
            Add +
        </button>
    )
}

export function FilterButton() {

    return (
        <>
            <select name="options" id="options">
                <option value="all">All</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
            </select>
        </>
    )
}

export function ItemList({ title, description }: ItemProps) {
    return (
        <div className="list-item">
            <h1>{title}</h1>
            {description && <p>{description}</p>}
        </div>
    );
}

export function List() {
    let data = [
        {
            title: "hello",
            description: "This is a description"
        },
    ];

    return (
        <div className="list-wrapper">
            {data.map((item, index) => (
                <ItemList key={index} title={item.title} description={item.description} />
            ))}
        </div>
    );
}
