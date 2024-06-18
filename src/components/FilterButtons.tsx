import React from "react";

interface FilterButtonProps {
  onFilterChange: (filter: string) => void;
}

export function FilterButton({ onFilterChange }: FilterButtonProps) {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFilter = e.target.value;
    onFilterChange(selectedFilter);
  };

  return (
    <select name="options" id="options" onChange={handleFilterChange} defaultValue="all" className="filter">
      <option value="all">All</option>
      <option value="doing">Doing</option>
      <option value="done">Done</option>
    </select>
  );
}
