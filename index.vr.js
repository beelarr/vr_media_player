import React from 'react';
import {
  AppRegistry,
  View,
} from 'react-vr';
import TitleScene from './components/scenes/TitleScene';
import Dashboard from './components/scenes/Dashboard';
import VideoPlayer from './components/scenes/VideoPlayer';

export default class media_player extends React.Component {
  render() {
    return (
      <View>
        {/*<TitleScene showButton={true} text={'Watch a Video'}/>*/}
        {/*<Dashboard showButton={false}  text={'Select Environment'} />*/}
        <VideoPlayer showButton={true} text={"Back to Dashboard"} />
      </View>
    );
  }
};

AppRegistry.registerComponent('media_player', () => media_player);
