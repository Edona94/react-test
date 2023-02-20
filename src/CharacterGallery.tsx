import {Character} from "./Character";
import CharacterCard from "./CharacterCard";



type GalleryProps = {
    characters: Character[]
}

export default function CharacterGallery(props:GalleryProps) {

    const characterCard = props.characters.map((character: Character) => {
        return <CharacterCard character={character}/>
    })
    return<div className={"CharacterGallery"}>{characterCard}</div>
}