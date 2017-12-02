import React, {Component} from 'react';
import {StyleSheet, Image, View} from 'react-native';

class GalleryDetail extends Component {
  render() {
    const user = this.props.navigation.state.params;
    return (
      <View>
        <Image style={styles.img} source={{uri: user.user.userpic_url}} />
      </View>
      )
  }
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%'
  },
});

export default GalleryDetail;
