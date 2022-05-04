import React from "react";
import { View, Image, Text } from "react-native";
import styles from './styles';
import {Album} from '../../types';

export type AlbumProps = {
    album: Album,
};
const AlbumComponent = (props: AlbumProps) => (
  <View style={styles.container}>
    {/* Image of album */}
    <Image source={{ uri: props.album.imageUri }} style={styles.image}/>
    {/* Artist headline */}
    <Text style={styles.text}>{props.album.artistsHeadline}</Text>
  </View>
);

export default AlbumComponent;
