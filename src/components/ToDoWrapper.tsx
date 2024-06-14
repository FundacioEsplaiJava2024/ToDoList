import { AddButton } from "./AddButton";
import { FilterButton } from "./FilterButtons";
import { List } from "./Lists";


interface ToDoProps {
    title: string;
}

export function ToDoWrapper({ title }: ToDoProps) {
    return (
        <main className="to-do-wrapper">
            <div className="hero-title">
                <h1>{title}</h1>
            </div>
            <div className="task-wrapper">
                <div className="buttons-wrapper">
                    <AddButton />
                    <FilterButton />
                </div>
                <List />
            </div>
        </main>
    );
}