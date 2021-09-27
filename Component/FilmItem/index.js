import React from 'react';
import { View, TextInput, Button, FlatList,StyleSheet,Text,Image } from 'react-native';
import { Container, OverviewCustom, TitleTextCustom, DateTextCustom, ImageCustom, HeaderContainer, DateCustom, InfoCustom, VoteTextCustom, OverviewTextCustom } from './styled';

export default function FilmItem({film}) {
console.log(film);
  return (
    <Container>
        <ImageCustom>
            <Image/>
        </ImageCustom>
    <InfoCustom>
    <HeaderContainer>
        <TitleTextCustom>{film.title}</TitleTextCustom>
        <VoteTextCustom>{film.vote_average}/10</VoteTextCustom>
    </HeaderContainer>
    
    <OverviewCustom>
        <OverviewTextCustom numberOfLines={6}>{film.overview}</OverviewTextCustom>
    </OverviewCustom>

    <DateCustom>
        <DateTextCustom >Sorti le {film.release_date}</DateTextCustom>
    </DateCustom>
    </InfoCustom>

  </Container>

  );
}

