import React, { Component } from 'react';
import {
    Video,
    View,
    asset,
    Animated
} from 'react-vr';

import { Easing } from 'react-native';

export default class VideoElement extends Component {

    state = {
        fadeIn: new Animated.Value(0)
    }

    componentDidMount() {
        Animated.sequence([
            Animated.timing(
                this.state.fadeIn,
                {
                    toValue: 1,
                    duration: 3000,
                    easing: Easing.ease
                }
            )
        ]).start()
}
    render() {
        return (
            <Animated.View
                style={{
                    margin: 0.1,
                    height: 4,
                    opacity: this.state.fadeIn
                }}>
                <Video
                    style={{ height: 4 }}
                    source={{uri: this.props.streamURL}}
                />

            </Animated.View>
        )
    }
}
