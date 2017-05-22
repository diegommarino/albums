import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


// Component creation.
const App = () => {
  return (
    <View>
      <Header headerText='Albums' />
      <AlbumList />
    </View>
  );
};


// Render to devide.
AppRegistry.registerComponent('albums', () => App);
