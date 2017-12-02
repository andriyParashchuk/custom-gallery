import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, ListView, TouchableHighlight, Text, View , Image} from 'react-native';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    return fetch('https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.photos),
        });
      }).catch((error) => {
        console.error(error);
      });
  }

  onButtonPress(user) {
    this.props.navigation.navigate('GalleryDetail', user);
  }

  GalleryList(user){
    return (
      <TouchableHighlight
        style={styles.galleryItem}
        onPress={() => this.onButtonPress(user)}>
        <View style={styles.figure}>
          <Image style={styles.img} source={{uri: user.user.userpic_url}} />
          <View style={styles.text}>
            <Text style={styles.name}>{user.name.toUpperCase()}</Text>
            <Text style={styles.author}>{user.user.fullname}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(user) => this.GalleryList(user)}
      />
    );
  }
}

const styles = StyleSheet.create({
  galleryItem: {
    marginBottom: 30
  },
  figure: {
    flex: 1,
    flexDirection: 'row'
  },
  img: {
    width: '50%',
    height: 150
  },
  text: {
    width: '50%',
    justifyContent: 'center',
    padding: 15
  },
  name: {
    color: '#333',
    fontSize: 16,
    lineHeight: 20
  },
  author: {
    color: '#888',
    fontSize: 14,
    lineHeight: 20
  },
  loader: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default Gallery;
