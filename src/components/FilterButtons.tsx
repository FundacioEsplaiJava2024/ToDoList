export function FilterButton() {
    return (
        <>
            <select name="options" id="options">
                <option value="all">All</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
            </select>
        </>
    );
}
