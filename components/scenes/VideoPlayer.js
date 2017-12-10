import React, { Component } from 'react';
import {
    Text,
    View,
    asset,
    Pano
} from 'react-vr';

import VideoPlayerLayout from './layouts/VideoPlayerLayout';

export default class VideoPlayer extends Component {
    state ={
      streamURL: ''
    };

    conponentWillMount() {
        this.setState({
            streamURL: ({
                streamURL: `http://player.twitch.tv/?channel=${this.props.streamID}` })
        })
    }
    render() {
        return (
            <View>
                <Pano source={asset(this.props.env)} />
                <VideoPlayerLayout
                    showButton={this.props.showButton}
                    text={this.props.text}
                    changeScenes={this.props.changeScenes}
                    scene={this.props.scene}
                    streamURL={this.state.streamURL}

                />
            </View>
        )
    }
}
