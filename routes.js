import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import Gallery from './components/gallery';
import GalleryDetail from './components/galleryDetail';

const Routes = StackNavigator({
  Gallery: {
    screen: Gallery,
    navigationOptions: {
      title: 'Gallery',
    }
  },
  GalleryDetail: {
    screen: GalleryDetail,
    navigationOptions: {
      title: 'Detail',
    }
  }
});

export default Routes;
