import { StyleSheet, Text, View  } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import AlbumCategory from '../components/AlbumCategory';

const albumCategory = {
  id: '1',
  title: 'Good Vibes',
  albums: [
    {
      id: '1',
      imageUri: 'https://i.vimeocdn.com/portrait/58832.jpg',
      artistsHeadline: 'Taylor Swift, Avicii, Eminem',
    },
    {
      id: '2',
      imageUri: 'https://i.pinimg.com/originals/a2/0d/37/a20d37791f8ad5cd54734cd3af559cc9.jpg',
      artistsHeadline: 'Taylor Swift, Avicii, The Weekend',
    },
    {
      id: '3',
      imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
      artistsHeadline: 'Taylor Swift, Avicii, Kanye West',
    },
    {
      id: '4',
      imageUri: 'https://i.pinimg.com/originals/a2/0d/37/a20d37791f8ad5cd54734cd3af559cc9.jpg',
      artistsHeadline: 'Taylor Swift, Avicii, Abba',
    },
    {
      id: '5',
      imageUri: 'https://i.vimeocdn.com/portrait/58832.jpg',
      artistsHeadline: 'Taylor Swift, Avicii, Post Malone',
    },
  ]
}

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
     <AlbumCategory title={albumCategory.title} albums={albumCategory.albums} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
