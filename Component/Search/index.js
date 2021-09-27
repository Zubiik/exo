import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import filmData from '../Data';
import { View, TextInput, Button, FlatList,StyleSheet,Text } from 'react-native';
import { Container } from './styled';
import FilmItem from '../FilmItem';
import {GetFilms} from "../../API";

export default function Search() {

 const [filmResearch, setFilmResearch] = useState({});
 const [textInput, setTextInput] = useState('Titre du film');

 const loadFilms = () => {
  GetFilms("star").then(data => setFilmResearch(data)
  )
  console.log(textInput)
 }

  return (
    <Container >
      <TextInput
       placeholder={textInput}
        onChangeText={text => setTextInput(text)}
        value={textInput}/>
      <Button title='rechercher' onPress={() => loadFilms()}/>
      <FlatList
          data={filmData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <Text>{<FilmItem film={item}/>}</Text>}
        />
    </Container>
  );
}
