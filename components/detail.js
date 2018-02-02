import React, {Component} from 'react';
import {StyleSheet, Image, View} from 'react-native';

class Detail extends Component {
  render() {
    const item = this.props.navigation.state.params;
    return (
      <View style={styles.detail_wrapper}>
        <Image style={styles.detail_img} source={{uri: item.user.userpic_url}}/>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  detail_wrapper: {
    flexGrow: 1
  },
  detail_img: {
    flexGrow: 1
  },
});

export default Detail;
