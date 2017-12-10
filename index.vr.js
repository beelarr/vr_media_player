import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';
import axios from 'react-native-axios';
import client_id from './components/creds/creds';

import TitleScene from './components/scenes/TitleScene';
import Dashboard from './components/scenes/Dashboard';
import VideoPlayer from './components/scenes/VideoPlayer';


export default class media_player extends React.Component {

  state = {
      previews: '',
      Ids: ''
  };

  gatherPreviews = data => {
    const previews = data.data.featured.map( featured => {
      return featured.stream.preview.large;
    });
    this.setState({previews: previews});
  };

  gatherStreamIds = data => {
    const IDs = data.data.featured.map( featured => {
      return featured.stream._id
    })
      console.log('IDs', IDs);
  };


  componentWillMount(){
    axios.get(`https://api.twitch.tv/kraken/streams/featured?limit=6&client_id=${client_id}`)
        .then(data => {
          console.log('Data', data);
          this.gatherPreviews(data);
          this.gatherStreamIds(data);
        })
        .catch(e => {
          console.log('Error', error);
        });
  }

  render() {
    return (
      <View>
        {/*<TitleScene showButton={true} text={'Watch a Video'}/>*/}
        <Dashboard previews={this.state.previews} showButton={false}  text={'Select Environment'} />
        {/*<VideoPlayer showButton={true} text={"Back to Dashboard"} />*/}
      </View>
    );
  }
};

AppRegistry.registerComponent('media_player', () => media_player);
