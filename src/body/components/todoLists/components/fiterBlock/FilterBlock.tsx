import {FilterStateType} from "../todoList/TodoList.tsx";

const setColor = (filterState: FilterStateType, state: FilterStateType) => {
    return {background: filterState === state ? "lightblue" : ""}
}

interface Props {
    setFilterState: (filterState: FilterStateType) => void
    filterState: FilterStateType
}

export const FilterBlock = (props: Props) => {
    const {filterState, setFilterState} = props
    return <div>
        <button style={setColor(filterState, "All")} onClick={() => setFilterState("All")}>ALL</button>
        <button style={setColor(filterState, "Active")} onClick={() => setFilterState("Active")}>Active</button>
        <button style={setColor(filterState, "Closed")} onClick={() => setFilterState("Closed")}>Closed</button>
    </div>
}

