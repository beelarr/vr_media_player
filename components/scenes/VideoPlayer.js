import React, { Component } from 'react';
import {
    Text,
    View,
    asset,
    Pano
} from 'react-vr';

export default class VideoPlayer extends Component {
    render() {
        return (
            <View>
                <Pano source={asset('title-background.jpg')} />
            </View>
        )
    }
}
