import React, { Component } from 'react';
import {
    Video,
    View,
    asset
} from 'react-vr';

export default class VideoElement extends Component {
    render() {
        return (
            <View
                style={{
                    margin: 0.1,
                    height: 4
                }}>
                <Video
                    style={{ height: 4 }}
                    source={asset('fireplace.mp4')}
                />

            </View>
        )
    }
}
