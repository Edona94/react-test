import React from 'react';
import './CharacterCard.css';
import {Character} from "./Character";

type CharacterCardProps={
  character:Character
}
export default function CharacterCard(props:CharacterCardProps){
    return(
        <div className={"card"}>
            <h2> {props.character.name}</h2>
            <img src={props.character.image} alt={props.character.name}/>
            <p>{props.character.status}</p>
            <p>{props.character.origin.name}</p>
        </div>
    )
}