import {ChangeEvent} from "react";


type InputUserProps={
    deliverMessage(text:string):void
}

export default function InputUser(props:InputUserProps){
    function handleInput(event:ChangeEvent<HTMLInputElement>){
        props.deliverMessage(event.target.value)
    }
    return(
        <input onChange={handleInput}/>
    );

}