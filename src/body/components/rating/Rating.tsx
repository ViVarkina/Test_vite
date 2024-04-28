import {Star} from "../star/Star.tsx"

export const Rating = () =>{
    console.log("RanderReiteng")
    const onClickStar=(starIndex: number)=>{
        console.log("Я звезда номер ", starIndex)
    }
    return <div>
        <Star index={1}/>
        <Star index={2}/>
        <Star index={3}/>
        <Star index={4}/>
        <Star index={5}/>
    </div>
}