import React, { Component } from 'react';
import {
    Text,
    View,
    asset,
    Pano
} from 'react-vr';

import VideoPlayerLayout from './layouts/VideoPlayerLayout';

export default class VideoPlayer extends Component {
    render() {
        return (
            <View>
                <Pano source={asset('title-background.jpg')} />
                <VideoPlayerLayout
                    showButton={this.props.showButton}
                    text={this.props.text}/>
            </View>
        )
    }
}
