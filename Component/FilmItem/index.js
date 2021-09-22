import React from 'react';
import { View, TextInput, Button, FlatList,StyleSheet,Text,Image } from 'react-native';
import { Container, OverviewCustom, ImageCustom, HeaderContainer, DateCustom, InfoCustom, OverviewTextCustom } from './styled';

export default function FilmItem({film}) {
console.log(film);
  return (
    <Container>
        <ImageCustom>
            <Image/>
        </ImageCustom>
    <InfoCustom>
    <HeaderContainer>
        <Text>{film.title}</Text>
        <Text>{film.vote_average}/10</Text>
    </HeaderContainer>
    
    <OverviewCustom>
        <OverviewTextCustom numberOfLines={6}>{film.overview}</OverviewTextCustom>
    </OverviewCustom>

    <DateCustom>
        <Text>Sorti le {film.release_date}</Text>
    </DateCustom>
    </InfoCustom>

  </Container>

  );
}

