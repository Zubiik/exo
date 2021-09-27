import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import filmData from '../Data';
import { View, TextInput, Button, FlatList,StyleSheet,Text } from 'react-native';
import { Container } from './styled';
import FilmItem from '../FilmItem';
import {GetFilms} from "../../API";

export default function Search() {

 const [filmResults, setFilmResults] = useState([]);
 const [textInput, setTextInput] = useState('Titre du film');

 const loadFilms = () => {
  GetFilms(textInput).then(data => {
    setFilmResults(data)
  })
 }

 useEffect(() => {
  GetFilms(textInput).then(data => {
    setFilmResults(data)
  })
 }, [textInput])

  return (
    <Container >
      <TextInput
       placeholder={textInput}
        onChangeText={text => setTextInput(text)}
        value={textInput}/>
      <Button title='rechercher' onPress={() => loadFilms()}/>
      <FlatList
          data={filmResults.results}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item}/>}
        />
    </Container>
  );
}
