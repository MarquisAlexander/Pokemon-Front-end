import React, {useState, useEffect} from 'react';
// import {useHistory} from 'react-router-dom';

import api from '../../services/api';
import {
        Text,
        Container,
        Title,
        TitleText,
        Ul,
        Header,
        Background,
        Image,
        Content,
        Card,
        Button,
        TextButton,
        ButtonsHotBar,
    } from './styles';

import logo from '../../assets/logo.svg';

export default function Dashboard() {
    const [pokemon, setPokemon] = useState([]);
    const [nextpokemon, setNextPokemon] = useState([]);
    const [lastpokemon, setLastPokemon] = useState([]);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');

    // const history = useHistory();
            
    useEffect(() => {
        api.get(url).then(response => {
            setPokemon(response.data.results);
            setNextPokemon(response.data.next);
            setLastPokemon(response.data.previous)
        });
    }, [url])

    function handleNextPag() {
        setUrl(nextpokemon);
    }

    function handleLastPag() {
        setUrl(lastpokemon);
    }

    return (
        <>
        <Container>
            <Header>
                <Image>
                    <img src={logo} alt="logo"/>
                </Image>
                <Background>
                </Background>
            </Header>
            <Content>
                <Title>
                    <TitleText>Catálogo pokemon</TitleText>
                </Title>
            <Ul>
                    {pokemon.map(pokemon => (
                        <li key={pokemon.id}>
                            <Card>
                                {/* <strong>Pokemon</strong> */}
                                <Text>{pokemon.name}</Text>
                            </Card>
                        </li>
                    ))}
            </Ul>

            </Content>
        </Container>
        <ButtonsHotBar>
            <Button onClick={handleLastPag}>
                <TextButton>last</TextButton>
            </Button>
            <Button onClick={handleNextPag}>
                <TextButton>Next</TextButton>
            </Button>
        </ButtonsHotBar>    
        </>
    )
}