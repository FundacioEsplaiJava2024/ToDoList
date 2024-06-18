import React, { useState } from "react";
import  List  from "./Lists";
import { FilterButton } from "./FilterButtons";
import AddButton from './AddButton';

interface ToDoProps {
  title: string;
}

export function ToDoWrapper({ title }: ToDoProps) {
  const [filter, setFilter] = useState<string>("all"); // Estado para el filtro

  const handleFilterChange = (selectedFilter: string) => {
    setFilter(selectedFilter); // Actualiza el estado de filtro
  };

  return (
    <main className="to-do-wrapper">
      <div className="hero-title">
        <h1>{title}</h1>
      </div>
      <div className="task-wrapper">
        <div className="buttons-wrapper">
            <AddButton />
            <FilterButton onFilterChange={handleFilterChange} />
        </div>
        <List filter={filter} />
      </div>
    </main>
  );
}
