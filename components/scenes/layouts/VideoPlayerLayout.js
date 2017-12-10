import React, { Component } from 'react';
import { View } from 'react-vr';

export default class VideoPlayerLayout extends Component {
    render() {
        return (
            <View>
                <View
                    style={{
                        flex: 1,
                        width: 8,
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        backgroundColor: '#333333',
                        layoutOrigin: [0.5, 0.5],
                        transform: [{translate: [0, 0, -5]}]
                    }}>
                </View>
                <View
                    style={{
                        flex: 1,
                        width: 2.5,
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        layoutOrigin: [0.5, 0.5],
                        transform: [{translate: [0, 0, 5]}]
                    }}>

                </View>
            </View>
        )
    }
}
