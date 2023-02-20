import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './CharacterCard.css';
import CharacterGallery from "./CharacterGallery";
import Characters from "./characters.json";
import InputUser from "./InputUser";
import {Character} from "./Character";
import SearchCharacter from "./component/SearchCharacter";
import axios from "axios";



function App() {
    //const characters = Characters
    const [characters,setCharacters]=useState<Character[]>([]);
    const [count, setCount] = useState<number>(0)
    const [count1, setCount1] = useState<number>(0)
    const [text, setText] = useState<string>("")
    const [searchText, setSearchText] = useState<string>("")

    function getCharacters(){
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
            setCharacters(response.data.results);
        })
            .catch((error)=>{
            console.log(error);
        })
    }
    useEffect(()=>{
        getCharacters()

    },[])

    function handleSearchText(searchText: string) {
        setSearchText(searchText);
    }

    const filteredCharacters= characters.filter((character: Character) =>
        character
            .name
            .toLowerCase()
            .includes(searchText.toLowerCase())
    );

    function increase() {
        setCount(count + 1)
    }

    function decrease() {
        setCount1(count1 - 1)
    }

    function handleText(text: string) {
        setText(text)
    }
    // const names:string[]=["Edona","Lena","Helen"]

    return (
        <div className="App">
            <header className="App-header">
                { /*<img src={logo} className="App-logo" alt="logo" />*/}
                <h1>Rick and Morty Gallery</h1>

                {/*names.map((name => <Greetings name={name}/>))*/}
                {/*<p>
                    <InputUser deliverMessage={handleText}/>
                </p>
                <p>
                    {text ? text : "Write something!"}
                </p>
                <button onClick={increase}>Click here!</button>
                <p>{count}</p>
                <button onClick={decrease}>Click here!</button>
                <p>{count1}</p> */}

                {/*<button onClick={getCharacters}>Search</button>*/}
            </header>
            <div>
                <p>Search for Characters:</p>
                <SearchCharacter searchText={handleSearchText} searchValue={searchText}/>
                {<CharacterGallery characters={filteredCharacters}/>}
            </div>
        </div>
    );
}

export default App;
