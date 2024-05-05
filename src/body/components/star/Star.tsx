import {useState} from "react";
import css from "./Star.module.css"


interface Props{
    index: number
    onClick:(index:number)=>void
    isActive: boolean
}

const ACTIVE_STAR="&#9733;"
const DEFAULT_STAR = "&#9734;"
export const Star = (props: Props) =>{
    const {index, onClick, isActive} = props
    const initialState = isActive ? ACTIVE_STAR: DEFAULT_STAR
    console.log("RenderStar", index)
    const [state, setState] = useState(isActive ? ACTIVE_STAR: DEFAULT_STAR)
    console.log(state)
    const onMouseLeave=()=>{
        // console.log("Ушли")
        setState(initialState)
    }
    const onMouseEnter=()=>{
        // console.log("Пришли")
        setState(ACTIVE_STAR)
    }
    return <span className={css.star} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
                  dangerouslySetInnerHTML={{__html: initialState}} onClick={()=> onClick(index)}/>
}