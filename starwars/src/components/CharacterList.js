import React, {useState, useEffect} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Container, Row } from "reactstrap";

export default function CharacterList() {
    const [char, setCharacter] = useState([]);
   
    useEffect(() => {
        axios
        .get("https://swapi.co/api/people/")
        .then(response => {
          setCharacter(response.data.results);
          console.log(response);
        })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    }, []);

    
    return (
        <Container>
            <Row>
                {char.map(char => {
                    return <CharacterCard 
                    char={char} 
                    key={char.name}
                    species={char.species.name}
                    />;
                })}
            </Row>
        </Container>
    );
}
