import {useState} from "react";
import css from "./Star.module.css"


interface Props{
    index: number
    onClick:(index:number)=>void
}
export const Star = (props: Props) =>{
    const {index} = props
    console.log("RanderStar", index)
    const [state, setState] = useState("&#9734;")
    console.log(state)
    const onMouseLeave=()=>{
        console.log("Ушли")
        setState("&#9734;")
    }
    const onMouseEnter=()=>{
        console.log("Пришли")
        setState("&#9733;")
    }
    return <span className={css.star} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}dangerouslySetInnerHTML={{__html: state}}/>
}