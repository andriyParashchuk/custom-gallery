import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, ListView, TouchableOpacity, Text, View , Image} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../actions/fetchData';

class Gallery extends Component {
  componentDidMount() {
    this.props.fetchData('https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF');
  }

  onClick(item) {
    this.props.navigation.navigate('Detail', item);
  }

  getItem(item){
    return (
      <TouchableOpacity
        style={styles.gallery_item}
        onPress={() => this.onClick(item)}>
        <Image style={styles.gallery_img} source={{uri: item.user.userpic_url}}/>
        <View style={styles.gallery_text}>
          <Text style={styles.gallery_title}>{item.name.toUpperCase()}</Text>
          <Text style={styles.gallery_author}>{item.user.fullname}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    if (this.props.isLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={styles.gallery_wrapper}>
        <ListView
          enableEmptySections={true}
          dataSource={this.props.dataSource}
          renderRow={(item) => this.getItem(item)}
        />
      </View>
    )
  }
}

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

const mapStateToProps = (state) => {
  return {
    dataSource: dataSource.cloneWithRows(state.fetchData),
    hasErrored: state.fetchHasErrored,
    isLoading: state.fetchIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchData(url))
  };
};

const styles = StyleSheet.create({
  gallery_wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingTop: 15
  },
  gallery_item: {
    flexDirection: 'row',
    marginBottom: 15
  },
  gallery_item: {
    flexDirection: 'row',
    marginBottom: 15
  },
  gallery_img: {
    width: '50%',
    height: 150
  },
  gallery_text: {
    width: '50%',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  gallery_title: {
    color: '#333',
    fontSize: 16
  },
  gallery_author: {
    color: '#888',
    fontSize: 14
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
