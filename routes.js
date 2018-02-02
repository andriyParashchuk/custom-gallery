import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import Gallery from './components/gallery';
import Detail from './components/detail';

const Routes = StackNavigator({
  Gallery: {
    screen: Gallery,
    navigationOptions: {
      title: 'Gallery',
      headerTitleStyle: {
        alignSelf: 'center'
      }
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: 'Detail'
    }
  }
});

export default Routes;
