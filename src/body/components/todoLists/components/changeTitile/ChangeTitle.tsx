import {Dispatch, SetStateAction, useState} from "react";
import {TodoListsType} from "../../TodoLists.tsx";

interface PropsType {
    title: string
    todolistId: string
    setTodolists: Dispatch<SetStateAction<TodoListsType[]>>
}

export const ChangeTitle = ({title, todolistId, setTodolists}: PropsType) => {
    const [titleIsVisible, setTitleIsVisible] = useState<boolean>(true)
    const [value, setValue] = useState<string>(title)

    const onSaveTitle = () => {
        setTodolists(prevState => {
            const newArr = prevState.map((tdl) => tdl.id === todolistId ? {...tdl, title: value} : tdl)
            return newArr
        })
        setTitleIsVisible(true)
    }


    return <div>
        {titleIsVisible ? (
            <div>
                {title}
                <button onClick={() => {
                    setTitleIsVisible(false)
                }}>change Title
                </button>
            </div>
        ) : (
            <div>
                <input value={value} onChange={(event) => {
                    setValue(event.target.value)
                }}/>
                <button onClick={() => {
                    setTitleIsVisible(true)
                    setValue(title)
                }}>cansel
                </button>
                <button onClick={onSaveTitle}>save</button>
            </div>
        )}
    </div>
}